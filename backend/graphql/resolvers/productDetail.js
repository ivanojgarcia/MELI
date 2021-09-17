import dotenv from 'dotenv'
import { callProductService, productDetailResponse, responseMapping } from '../utils/responseRefactor';
dotenv.config();
const { URL_MELI } = process.env;

export const detail = async id => {
    try {
        const productDetail = await callProductService(`${URL_MELI}/items/${id}`);
        const productDescription = await callProductService(`${URL_MELI}/items/${id}/description`);
        const productResult = await productDetailResponse({productDetail, productDescription})
        return {
            ...responseMapping,
            item: productResult
        }
    } catch (error) {
        console.log("🚀 ~ file: productDetail.js ~ line 13 ~ error", error)
        throw new Error(error.message)
    }
}