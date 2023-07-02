const {findProducts, createNewProduct, updateExistingProduct,deleteProduct, findProductById } = require('../../models/products.model');

// Finding Products
async function httpFindProducts(req,res) {
    const products = await findProducts();
    return res.status(200).send(products)
}

async function httpFindProductById(req,res) {
    const product = await findProductById(req.body);
    res.status(200).send(JSON.stringify(product))
}


// Adding New Product
async function httpAddNewProduct(req,res) {
    const productData = req.body;
    
    if(!productData) {
        res.status(404).json({
            error:'No Product Data'
        })
    }
    await createNewProduct(JSON.stringify(productData))
    return res.status(201).json(productData)
}

// Update Price
async function httpUpdateProduct(req, res){
    const updatedProduct = req.body;
    const updateProduct = await updateExistingProduct(updatedProduct);
    if(updateProduct.modifiedCount === 1) {
        res.status(200).json({
            message:"Price Updated Successfully"
        })
    } else {
        res.status(400).json({
            message:"Something Went Wrong"
        })
    }
}

// Delete Product
async function httpDeleteProduct(req,res){
    const ProductId = req.body;
    const deletedProduct = await deleteProduct(ProductId);
    if(deletedProduct.deletedCount === 0) {
        res.status(404).json({
            message:'Something Problem in deletion of Data'
        })
       }
       res.status(200).json({
        message:"Product deletion Successfull"
       })
}

module.exports = {
    httpFindProducts,
    httpAddNewProduct,
    httpUpdateProduct,
    httpDeleteProduct,
    httpFindProductById
}