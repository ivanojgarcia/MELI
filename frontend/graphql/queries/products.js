import { gql } from '@apollo/client';
export const GET_PRODUCTS_KEY = gql `
    query GetProductByKey($input: queryProductInput){
        getProductsByKey(input: $input) {
            author{
            name
            lastname
            }
            categories
            items {
            id
            title
            price {
                currency
                amount
                decimals
            }
            picture
            condition
            free_shipping
            }
        }
    }
`

export const GET_PRODUCT_DETAIL = gql `
    query ProductDetail($id: String) {
        productDetail(id: $id) {
            author {
            name
            lastname
            }
            item {
            id
            title
            price {
                currency
                amount
                decimals
            }
            picture
            condition
            free_shipping
            description
            }
        }
    }
`