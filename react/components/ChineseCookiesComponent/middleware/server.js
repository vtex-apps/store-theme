const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.get('/api/dataentities/CF/search', async (req, res) => {
  try {
    const url = `https://valtech.vtexcommercestable.com.br/api/dataentities/CF/search?_fields=CookieFortune`;
    const headers = {
      "REST-Range": "resources=0-100",
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-VTEX-API-AppKey': process.env.VTEX_API_APPKEY,
      'X-VTEX-API-AppToken': process.env.VTEX_API_APPTOKEN,
    };

    console.log('Fetching from URL:', url);
    console.log('Using headers:', headers);

    const response = await fetch(url, {
      method: 'GET',
      headers: headers,
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers.raw());

    if (!response.ok) {
      const errorDetails = await response.text();
      console.error('Error details:', errorDetails);
      throw new Error('Response throws an error: ' + errorDetails);
    }

    const data = await response.json();
    console.log('Data fetched from API:', data);
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
