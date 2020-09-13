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

export async function updateProductAPI(productData) {

    const result = await fetch('/api/products/' + productData.id , {
        method: 'PATCH',
        body: JSON.stringify(productData),
        headers: headers()
    })

    const data = await result.json()
    console.log('data', data)

    return data
}

export async function deleteProductAPI(productData) {

    const result = await fetch('/api/products/' + productData.id , {
        method: 'DELETE',
        headers: headers()
    })

    const data = await result.json()
    console.log('data', data)

    return data
}

export async function getProductCodeAndDescAPI() {

    const result = await fetch('/api/productsCode', {
        method: 'GET',
        headers: headers()
    })

    const data = await result.json()
    console.log('data', data)

    return data
}


