import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import icShipping from '../assets/ic_shipping.png';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS_KEY } from '../graphql/queries/products';


const search = (props) => {
console.log("🚀 ~ file: search.js ~ line 10 ~ search ~ props", props)


    const { loading, error, data } = useQuery(GET_PRODUCTS_KEY, {
        variables: {
            input: {
                key: "iphone negro",
                limit: 4
            }
        }
    });
    if (loading) return <p>Loading ...</p>;
    console.log(data);

    return (
        <Layout>
            <section>
                <div className="flex flex-row">
                    <div >
                        <img src="https://http2.mlstatic.com/D_NQ_NP_995670-MLA45058669268_032021-V.webp" className="w-auto" alt="iphone" />
                    </div>
                    <div className="mt-5 ml-5 w-full">
                        <div className="text-left w-full">
                            <div className="text-xl mb-3">
                                <span className="mr-2" >
                                    $ 1.980
                                </span>
                                <Image src={icShipping} alt="Mercadolibre" width={15} height={15}/>
                            </div>
                            <div className="text-base">
                                Appletouch 5G
                            </div>
                            <div className="text-base">
                                completo
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end items-start mt-5 w-full text-gray-400 text-sm">
                        capital Federal
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default search;