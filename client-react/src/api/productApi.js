import { headers } from './util'


export async function createNewProductAPI(productData) {

    const result = await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify(productData),
        headers: headers()
    })

    const data = await result.json()
    console.log('data', data)

    return data
}

export async function getProductListAPI(productData) {

    const result = await fetch('/api/products', {
        method: 'GET',
        headers: headers()
    })

    const data = await result.json()
    console.log('data', data)

    return data
}