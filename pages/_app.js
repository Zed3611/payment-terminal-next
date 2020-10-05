import '../style/index.css'
import '../style/LoadIcon.css'
import React from "react";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>PaymentTerminal</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}