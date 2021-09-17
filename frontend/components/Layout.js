import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Breadcrumb from './Breadcrumb';
import { useRouter } from 'next/router'

const Layout = ({children}) => {

    return (
        <div className=" gray-meli h-screen">
            <Head>
                <title>MELI-Challenge</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </Head>            
            <div className="">
                {children}
            </div>
        </div>
    );
};

export default Layout;