import { gql } from 'apollo-server';
import { productsByQuery } from './resolvers/getProducts';
import { detail } from './resolvers/productDetail';

export const typeDefs = gql `

    type Author {
        name: String,
        lastname: String
    }

    type Price {
        currency: String,
        amount: Int,
        decimals: Int
    }

    type Product {
        id: String,
        title: String,
        price: Price,
        picture: String,
        condition: String,
        free_shipping: Boolean
        description: String
    }
    
    type ProductList {
        author: Author,
        categories: [String],
        items: [Product]
    }

    type ProductDetail {
        author: Author,
        item: Product
    }

    input queryProductInput {
        limit: Int,
        key: String
    }

    type Query {
        getProductsByKey(input: queryProductInput): ProductList
        checkServer: String
        productDetail(id: String): ProductDetail
    }
` 

export const resolvers = {
    Query: {
        getProductsByKey: async (_, {input})  => {
            return await productsByQuery(input);
        },
        checkServer: () => {
            return "Done!"
        },
        productDetail: async(_, {id}) => {
            return await detail(id);
        }
    }
}