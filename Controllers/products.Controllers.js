const { filterBody } = require("../Helpers/Query/query");
const Strings = require("../Config/constants");
const {Api:{Product}} = require("../Config/config")
const { DBaddProduct, DBgetProducts, DBfindProductById,DBupdateProduct,DBdeleteProduct, DBgetProductStats } = require("../Modals/Methods/product.Methods");
const response = require("../Helpers/response");
const { productFilterOptions } = require("../Helpers/Query/product.Query");

exports.createProduct = async (req,res) => {
    const data  = await filterBody(req.body,Product.ALLOWED_FIELDS)
    if(!data){
        return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.INVALID_FIELDS) 
    }
    if(!req.files && req.files.length != 4){
        return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.PRODUCTS_IMAGE) 
    }
  
    const images = req.files.map(file => file.path)
    data.productImage = images
    data.ownerId = req.user.id
    const newProduct = await DBaddProduct(data)
    if(!newProduct){
        return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.PRODUCT_FAILED) 
    }
    return response(res, Strings.SERVER_OK_HTTP_CODE, {msg:Strings.PRODUCT_CREATED, data:newProduct})


};

exports.getAllProducts = async (req,res) => {
    const products = await productFilterOptions(req)
    if(!products.length){
        return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.NO_PRODUCTS_FOUND) 
    }
    return response(res, Strings.SERVER_OK_HTTP_CODE, {msg:Strings.PRODUCTS_FETCHED, data:products})
};

exports.getProductById = async (req,res) => {
    try{
        const { id } = req.params
        if(!id){
            return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.PRODUCT_ID_REQUIRED) 
        }
        const product = await DBfindProductById(id)
        if(!product){
            return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.NO_PRODUCT_FOUND) 
        }
        return response(res, Strings.SERVER_OK_HTTP_CODE, {msg:Strings.PRODUCTS_FETCHED, data:product})

    }catch(error){
        return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, error)
    }
};

exports.updateProduct = async (req,res) => {
    try{
        const { id } = req.params
        if(!id){
            return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.PRODUCT_ID_REQUIRED) 
        }
        const data  = await filterBody(req.body,Product.ALLOWED_FIELDS)
        if(!data){
            return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.INVALID_FIELDS) 
        }
        const product = await DBfindProductById(id)
        if(!product){
            return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.NO_PRODUCT_FOUND) 
        }
        const updatedProduct = await DBupdateProduct(id,data)
        if(!updatedProduct){
            return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.PRODUCT_FAILED_UPDATE) 
        }
        return response(res, Strings.SERVER_OK_HTTP_CODE, {msg:Strings.PRODUCT_UPDATED, data:updatedProduct})
    }catch(error){
        return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, error)
    }
};

exports.deleteProduct = async (req,res) => {
    try{
        const { id } = req.params
        if(!id){
            return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.PRODUCT_ID_REQUIRED) 
        }
        const product = await DBfindProductById(id)
        if(!product){
            return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.NO_PRODUCT_FOUND) 
        }
        const deletedProduct = await DBdeleteProduct(id)
        if(!deletedProduct){
            return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.PRODUCT_FAILED_DELETE) 
        }
        return response(res, Strings.SERVER_OK_HTTP_CODE, {msg:Strings.PRODUCT_DELETED, data:deletedProduct})
    }
    catch(error){
        return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, error)
    }
};


exports.getProductsStats = async (req,res) => {
    const {category} = req.query
    if(!category){
        return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.PRODUCT_CATEGORY_REQUIRED) 
    }
    const product = await DBgetProductStats(category)   
    if(!product){
        return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.NO_PRODUCT_FOUND) 
    }
    return response(res, Strings.SERVER_OK_HTTP_CODE, {msg:Strings.PRODUCTS_FETCHED, data:product})
};

