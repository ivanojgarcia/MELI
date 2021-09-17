import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS_KEY, GET_PRODUCT_DETAIL } from '../graphql/queries/products';
import Navbar from '../components/Navbar';
import Breadcrumb from '../components/Breadcrumb';
import ProductList from '../components/ProductList';


const search = (props) => {
  const [key, setKey] = useState('');
  const [productList, setProductList] = useState();
  const [productDetail, setProductDetail] = useState();
  
  
  const searchProducts = e => {
    e.preventDefault();
    setProductList(null)
    setProductDetail(null)
    try {
      const {data} = getProducts;
      setProductList(data.getProductsByKey);
      
    } catch (error) {
      return error.message
    }
  }
  
  
  const getProducts = useQuery(GET_PRODUCTS_KEY, {
    variables: {
      input: {
        key,
        limit: 4
      }
    }
  });
    return (
        <Layout>
            <Navbar searchProducts= {searchProducts} setKey={setKey} />
            <div className="container mx-auto">
                <Breadcrumb category={productList?.categories[0]} searchWord={key} />
            </div>
            {(!productDetail) ? 
            
            <section className="container mx-auto bg-white rounded-md p-3">
                <div className="grid grid-cols-6 gap-4">
                  {(!productList || productList.items.length === 0) ? <h1>Sin Información...</h1> : 
                    productList.items.map(product => (
                    <ProductList product= {product} key={product.id} setProductDetail={setProductDetail} />
                  ))}
                </div>
            </section>
            
            : 
            
            <section className="container mx-auto bg-white rounded-md p-3">
                <div className="flex flex-row">
                    <div >
                        <img src={productDetail.picture} className="w-9/12" alt="iphone" />
                    </div>
                    <div className="mt-5 ml-5">
                        <div className="text-left w-full">
                            <div className="text-sm text-gray-300">
                            {(productDetail.condition === "new") ? "Nuevo" : "Usado"}
                            </div>
                            <div className="text-xl">
                                {productDetail.title}
                            </div>
                            <p className="text-3xl my-8">
                                <span className="" >
                                    $ {productDetail.price.amount}
                                </span>
                            </p>
                            <div>
                                <button className="text-center text-white bg-blue-500 p-2 w-40 rounded-md">
                                    Comprar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full text-justify p-8 ">
                    <span className="text-2xl">
                        Descripción del Producto
                    </span>
                    <p className="mt-5">
                      {productDetail.description}
                    </p>
                </div>
            </section>
            
            }            
        </Layout>
    );
};

export default search;