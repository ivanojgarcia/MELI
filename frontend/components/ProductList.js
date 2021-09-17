import React from 'react';
import Image from 'next/image';
import icShipping from '../assets/ic_shipping.png';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT_DETAIL } from '../graphql/queries/products';
const ProductList = ({product, setProductDetail}) => {
    const {id} = product;
    const productDescription = e => {
        try {
            const {data} = getDetailToProduct;
            setProductDetail(data.productDetail.item);
          //   setProductList(data.getProductsByKey);
            
          } catch (error) {
            return error.message
        }
    }

      const getDetailToProduct = useQuery(GET_PRODUCT_DETAIL, {
        variables: {
          id
        }
      });
    
    return (
        <>
           <div className="col-start-1 col-end-7 rounded-md hover:shadow cursor-pointer"
            onClick={() => productDescription()}
           >
           <div className="flex flex-row">
            <div className="w-full">
                <img src={product?.picture} className="w-6/12" alt={product.title} />
            </div>
            <div className="mt-5 ml-5 w-full">
                <div className="text-left w-full">
                    <div className="text-xl mb-3">
                        <span className="mr-2" >
                            $ {`${product?.price.amount}`}
                        </span>
                       {
                            (product.free_shipping) ? <Image src={icShipping} alt="Mercadolibre" width={15} height={15}/> : null
                       } 
                    </div>
                    <div className="text-base">
                        {product?.title}
                    </div>
                </div>
            </div>
            <div className="flex justify-end items-start mt-5 w-full text-gray-400 text-sm">
                {(product.condition === "new") ? "Nuevo" : "Usado"}
            </div>
        </div>
        </div>
        </>
    );
};

export default ProductList;