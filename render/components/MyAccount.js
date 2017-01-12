import React, {Component, PropTypes} from 'react'
import MyAccountsComponent from 'vtex.my-accounts'

import gql from 'graphql-tag'
import {connect} from 'react-redux'
import {graphql} from 'react-apollo'

//eslint-disable-next-line
class MyAccount extends Component {
  render () {
    const data = this.props.data || {}
    const {loading, refetch} = data
    const {profile} = data
    const {id, userId, firstName, lastName, birthDate, gender, homePhone, businessPhone, document: userDocument, email, address} = profile || {}
    return (
      <MyAccountsComponent
        loading={loading}
        id={id}
        userId={userId}
        firstName={firstName}
        lastName={lastName}
        birthDate={birthDate}
        gender={gender}
        homePhone={homePhone}
        businessPhone={businessPhone}
        document={userDocument}
        email={email}
        refetch={refetch}
        addresses={address}
      />
    )
  }
}

MyAccount.propTypes = {
  data: PropTypes.object,
}

const query = gql`
  query Profile {
    profile {
      id,
      userId,
      firstName,
      lastName,
      birthDate,
      gender,
      homePhone,
      businessPhone,
      document,
      email,
      address {
        userId,
        id,
        receiverName,
        complement,
        neighborhood,
        state,
        number,
        street,
        postalCode,
        city,
        reference,
        addressName,
        addressType
      }
    }
  }
`

const MyAccountWithData = graphql(query, {
  options: () => ({ssr: false, forceFetch: true}),
})(MyAccount)
delete MyAccountWithData.fetchData

export default connect()(MyAccountWithData)
