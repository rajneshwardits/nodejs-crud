import products from "../models/products.js"

async function productList(body) {
    try {
        return await products.find({})
    }
    catch (err) {
        console.log(err)
    }
}

async function productAdd(body) {
    try {
        const newProduct = new products({ name: body.name, description: body.description, price: body.price })
        return await newProduct.save()
    }
    catch (err) {
        console.log(err)
    }
}

async function productUpdate(params, body) {
    try {
        return await products.updateOne({_id:params.id},{$set:body})
    }
    catch (err) {
        console.log(err)
    }
}

async function productDelete(params) {
    try {
        return await products.deleteOne({_id:params.id})
    }
    catch (err) {
        console.log(err)
    }
}

export {
    productList, productAdd, productUpdate, productDelete
}