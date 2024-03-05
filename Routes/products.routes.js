const express = require('express');
const upload = require('../Middlwares/multer');
const { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct, getProductsStats } = require('../Controllers/products.Controllers');
const { isAuthenticate } = require('../Middlwares/auth.middleware');
const {isOwner} = require('../Middlwares/isOwner.middleware');
const router = express.Router();
const p = require('../Modals/Schema/product.Schema')


//Product Endpoints
router.route('/')
.get(getAllProducts)
.post(isAuthenticate,upload.array('productImage', 4),createProduct)


router.get('/stats',isAuthenticate,getProductsStats)




router.route('/:id')
.get(getProductById)
.put(isAuthenticate,isOwner,updateProduct)
.delete(isAuthenticate,isOwner,deleteProduct) 




module.exports = router;