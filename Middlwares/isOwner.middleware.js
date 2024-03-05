const { DBfindProductById } = require("../Modals/Methods/product.Methods")
const Strings = require("../Config/constants")
const response = require("../Helpers/response")

exports.isOwner = async (req, res, next) => {
  try{
    const userId = req.user.id
    const { id } = req.params
    const current_Product = await DBfindProductById(id)
    if(!current_Product){
      return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.NO_PRODUCT_FOUND) 
    }
    if(current_Product.ownerId != userId){
      return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, Strings.UNAUTHORIZED) 
    }
    next()

  }catch(error){
    return response(res, Strings.SERVER_BAD_REQUEST_HTTP_CODE, error)
  }
}