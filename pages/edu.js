import Head from 'next/head'
import Image from 'next/image'
const finnhub = require('finnhub');
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = ""
const finnhubClient = new finnhub.DefaultApi()

export default function edu(props) {
    return (
        <h1> Education Page </h1>
    )
}