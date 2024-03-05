const Product = require('../Schema/product.Schema');


exports.DBaddProduct = async (data) => {
    try{
        const newProduct = new Product(data)
        return await newProduct.save()
    }catch(error){
        return error
    }
}

exports.DBgetProducts = async () => {
    try{
        return await Product.find({isPublished:true}).populate({path:'ownerId',select:'-_id -password -__v -createdAt -updatedAt -lastLogin -active -role'})
    }catch(error){
        return error
    }
}

exports.DBfindProductById = async (id) => {
    try{
        return await Product.findById(id)
    }catch(error){
        return error
    }
}


exports.DBupdateProduct = async (id,data) => {
    try{
        return await Product.findByIdAndUpdate(id,data,{new:true})
    }
    catch(error){
        return error
    }
}

exports.DBdeleteProduct = async (id) => {
    try{
        return await Product.deleteOne({_id:id})
    }
    catch(error){
        return error
    }
}


exports.DBgetFiltredProduct = async (page=1,limits=5,sortBy='createdAt',order='asc',minPrice=0,maxPrice=Infinity,category,search="") => {
    try{
        return (
            await Product
            .find({
                isPublished:true,
                price:{$gte:minPrice,$lte:maxPrice},
                categoryName:{$regex:new RegExp(category,'i')},
                $or:[
                    {productName:{$regex:new RegExp(search,'i')}},
                    {description:{$regex:new RegExp(search,'i')}},
                    {categoryName:{$regex:new RegExp(search,'i')}},
                ]
            })
            .skip((page-1)*limits)
            .limit(limits)
            .sort({[sortBy]:order})
            .populate({path:'ownerId',select:'-_id  -__v -createdAt -updatedAt -lastLogin -active -role'})
        )
    }
    catch(error){
        return error
    }
}


exports.DBgetProductStats = async (category) => {
    try{
        return await Product.aggregate([
            {
                $match:{isPublished:true,categoryName:category}
            },
            {
                $group:{
                    _id:'$categoryName',
                    totalProducts:{$sum:1},
                    totalStock:{$sum:'$stock'},
                    avgPrice:{$avg:'$price'},
                    minPrice:{$min:'$price'},
                    maxPrice:{$max:'$price'}
                }
            }
        ])
    }
    catch(error){
        return error
    }
}
