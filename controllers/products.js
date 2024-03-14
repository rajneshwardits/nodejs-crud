import * as productServices from '../services/products.js'

async function productList(req, res) {
    try {
        const data = await productServices.productList(req.body)
        res.send({ status: 200, data, message: "Get products list successfully." })
    }
    catch (err) {
        console.log(err)
    }
}

async function productAdd(req, res) {
    try {
        const data = await productServices.productAdd(req.body)
        res.send({ status: 200, data, message: "Product added successfully." })
    }
    catch (err) {
        console.log(err)
    }
}

async function productUpdate(req, res) {
    try {
        const data = await productServices.productUpdate(req.params, req.body)
        res.send({ status: 200, data, message: "Product update successfully." })
    }
    catch (err) {
        console.log(err)
    }
}

async function productDelete(req, res) {
    try {
        const data = await productServices.productDelete(req.params)
        res.send({ status: 200, data, message: "Products deleted successfully." })
    }
    catch (err) {
        console.log(err)
    }
}



export {
    productList, productAdd, productUpdate, productDelete
}