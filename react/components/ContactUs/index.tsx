import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

interface ContactUsProps {
    firstName: string;
    lastName: string;
    contactNumber: number;
    location: string;
    id: number;
}

interface ContactUsData {
    contactUsData: ContactUsProps[];
}
interface Props{
    title: string
    pageSize: number
}


const ContactUsTable = ({ contactUsData }: { contactUsData: ContactUsProps[] }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Contact Number</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {contactUsData.map((contactUs: { firstName: string; lastName: string; contactNumber: number; location: string; id: number }) => {
                        return <tr key={contactUs.id}>
                            <td>{contactUs.firstName}</td>
                            <td>{contactUs.lastName}</td>
                            <td>{contactUs.contactNumber}</td>
                            <td>{contactUs.location}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

const getContactUsDataFromBackend = async ({ start, end }: { start: number, end: number }) => {
    try {
        const config = {
            method: 'get',
            url: '/_v/dataEntities',
            params: {
                start,
                end
            },
            timeout: 5000,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const response = await axios.request(config);
        return response.data;
    } catch (error) {
        console.error('Error details:', error);
        throw error;
    }
};

const getContactUsData = async ({ start, end }: { start: number, end: number }, setIsPageLimitReached: (isPageLimitReached: boolean) => void) => {
    const response = await axios.get('/api/dataentities/NC/search?_size=5&_fields=_all', {
        headers: {
            'Accept': 'application/vnd.vtex.ds.v10+json',
            'Content-Type': 'application/json',
            'X-VTEX-API-AppKey': 'vtexappkey-trika-EGMFAJ',
            'X-VTEX-API-AppToken': 'PMBEGIZOAKIJMNJPTEHUEGCMEPNACEGLWWMHTWGQAAHMXWQEQDVFERPKDWXIJIRHFLHITNITFTWNTYDETOASVOWJJWEWRQMAKVSQODHHMMTAVZXBVVCLIXHAOXHZSOWB',
            'REST-Range': `resources=${start}-${end}`
        },
        baseURL: window.location.origin,
    });
    const responseRange = response.headers['rest-content-range'];
    const totalItems = responseRange.split('/')[1];
    if (totalItems <= end) {
        setIsPageLimitReached(true);
    }
    return response.data;
}
const ContactUs = ({ pageSize, title }: Props) => {
    const [contactUsData, setContactUsData] = useState<ContactUsProps[]>([]);
    const [isPageLimitReached, setIsPageLimitReached] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getContactUsDataFromBackend({ start: 0, end: pageSize });
                setContactUsData(response);
            } catch (error) {
                console.error('Error in useEffect:', error);
            }
        };
    
        fetchData();
    }, [pageSize]);

    const handleLoadMore = async () => {
        try {
            const response = await getContactUsDataFromBackend({ 
                start: contactUsData.length, 
                end: contactUsData.length + pageSize 
            });
            setContactUsData([...contactUsData, ...response]);
            if (response.length < pageSize) {
                setIsPageLimitReached(true);
            }
        } catch (error) {
            console.error('Error loading more data:', error);
        }
    }

    return (
        <div>
            <ContactUsTable contactUsData={contactUsData} />
            <h3>{title}</h3>
            <button onClick={handleLoadMore} disabled={isPageLimitReached}>Load More</button>
        </div>
    )
}

export default ContactUs;