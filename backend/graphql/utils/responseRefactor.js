import fetch from "node-fetch";

const isintegerFunction = numberValue => {
    if(typeof numberValue == 'number' && !isNaN(numberValue)){
    
        // check if it is integer
        if(Number.isInteger(numberValue)) {
            return {decimals:0, amount: numberValue }
        } 
        else {
            let [amount, decimals] = numberValue.toString().split('.');
            return {decimals, amount }
        }
    
    } else {
        return {decimals:0, amount: 0 }
    }
}

export const callProductService = async url => {
    const productDetail = await fetch(url);
    return await productDetail.json(); 
}

export const categoryProduct = async categories => {
    return categories.reduce((catArray, cat) => {
        catArray.push(cat.name);
        return catArray;
    }, [])
}

export const responseMapping = {
    author: {
        name: "Ivano",
        lastname: "García"
    },
    categories: [],
    items: []
}

export const productDetailResponse = async ({productDetail, productDescription}) => {
    const {
        id, title, price, currency_id, condition, shipping, sold_quantity, pictures
    } = productDetail;
    const { amount, decimals } = isintegerFunction(price)
    return {
        id, 
        title, 
        price: {
            currency: currency_id,
            amount,
            decimals
        },
        currency_id, 
        condition, 
        free_shipping: shipping?.free_shipping, 
        sold_quantity, 
        picture: pictures ? pictures[0].url : '',
        description: productDescription.plain_text
    }
}


export const resultProduct = async results => {
    return results.reduce((resultArray, result)=> {
        const { amount, decimals } = isintegerFunction(result.prices.prices[0].amount)
        let item = {
            id: result.id,
            title: result.title,
            price: {
                currency: result.prices.prices[0].currency_id,
                amount,
                decimals
            },
            picture: result.thumbnail,
            condition: result.condition,
            free_shipping: result.shipping.free_shipping
        }
        resultArray.push(item);
        return resultArray;
    }, []);
}