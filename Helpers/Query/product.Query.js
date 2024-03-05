const { DBgetFiltredProduct } = require("../../Modals/Methods/product.Methods")

exports.productFilterOptions = async (req) => {
    const {page,limits,sortBy,order,minPrice,maxPrice,category,search} = req.query
    const products = await DBgetFiltredProduct(page, limits, sortBy,order, minPrice, maxPrice,category,search)
    console.log(products)
    return products
}