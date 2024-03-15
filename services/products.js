import products from "../collections/products/index.js"

async function productList(query) {
    try {
        const sort = {}
        sort[query.sortBy] = parseInt(query.sort)
        const startIndex = (parseInt(query.page) - 1) * parseInt(query.limit);
        const limit = parseInt(query.limit)
        return await products.find({}).skip(startIndex).limit(limit).sort(sort);
    }
    catch (err) {
        console.log("Products services err => ", err)
        throw new Error(err.message)
    }
}

async function productAdd(body) {
    try {
        const newProduct = new products({ name: body.name, description: body.description, price: body.price })
        return await newProduct.save()
    }
    catch (err) {
        console.log("Products services err => ", err)
        throw new Error(err.message)
    }
}

async function productUpdate(params, body) {
    try {
        return await products.updateOne({ _id: params.id }, { $set: body })
    }
    catch (err) {
        console.log("Products services err => ", err)
        throw new Error(err.message)
    }
}

async function productDelete(params) {
    try {
        return await products.deleteOne({ _id: params.id })
    }
    catch (err) {
        console.log("Products services err => ", err)
        throw new Error(err.message)
    }
}

export {
    productList, productAdd, productUpdate, productDelete
}