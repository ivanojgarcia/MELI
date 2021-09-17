import fetch from "node-fetch"; 
import { URL } from "url";
import dotenv from 'dotenv'
dotenv.config();
const { URL_MELI } = process.env;
import { categoryProduct, resultProduct, responseMapping} from '../utils/responseRefactor';
const filter = "category";

const productsByQuery = async (input) => {
    const { key, limit = 4 } = input;
    const response = await fetch(new URL(`${URL_MELI}/sites/MLA/search?q=${key}&limit=${limit}`));
    const data = await response.json();
    const categoryArray = data.available_filters.find(categoryFilter => categoryFilter.id === filter) || data.filters.find(categoryFilter => categoryFilter.id === filter);
    const categories = categoryArray ? await categoryProduct(categoryArray.values) : [];
    const items = await resultProduct(data.results);
    return {
        ...responseMapping,
        categories,
        items
    }
}

export { productsByQuery }