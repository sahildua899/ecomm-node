const Product = require('./products.mongo');



// Finding All Products
async function findProducts() {
    return await Product.find({})
    
}


// Finding One Product

async function findProductById(data) {
    const oneProduct = await Product.findOne({id:data.id})
    
    return oneProduct
}
// Add New Product
async function createNewProduct(productData) {
    const newproductData = JSON.parse(productData);
    const foundProduct = await findById(newproductData)

    if(foundProduct) {
        return (`Already exists`)
    }else {
        const addedProduct =  new Product(newproductData);
        const checkAdd = await addedProduct.save()
        return checkAdd;
    }
    
} 

// Modify Product
async function updateExistingProduct(updatedProduct) {
    const foundProduct = await findById(updatedProduct);
    const updatedPrice = await Product.updateOne({id:foundProduct.id}, {price:updatedProduct.price});
    return updatedPrice
}

// Delete Product
async function deleteProduct(ProductId){
    const foundProduct = await findById(ProductId);
    const deleteProduct = await Product.deleteOne({id:foundProduct.id});
    return deleteProduct;
}

module.exports = {
    findProducts,
    createNewProduct,
    updateExistingProduct,
    deleteProduct,
    findProductById
}   