
//* importing required 3th party modules */
const mongoose = require("mongoose");
const {database} = require('../../Config/config')

const validation_strings = require("../../Config/constants");

const productSchema = new mongoose.Schema(
    {
    productImage: {
      type: [String],
    },
    productName: {
      type: String,
      required: [true, validation_strings.PRODUCT_NAME_REQUIRED],
      unique: [true, validation_strings.PRODUCT_NAME_UNIQUE],
    },
 
    categoryName: {
      type: 'string',
      required: [true, validation_strings.PRODUCT_CATEGORY_REQUIRED],
    },
    description: {
      type: String,
      
    },
    price: {
      type: Number,
      required: [true, validation_strings.PRODUCT_PRICE_REQUIRED],
      min: [0, validation_strings.PRODUCT_PRICE_MIN],
    },
    discountPrice: {
      type: Number,
      min: [0, validation_strings.PRODUCT_DISCOUNT_PRICE_MIN],
    },
    stock: {
        type: Number,
        default: 0,
        },
    isPublished: {
      type: Boolean,
      default: false,
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, validation_strings.OWNER_ID_REQUIRED],
        },
  },
  database.options
);

//Methods

// productSchema.methods.findAllProduct =async ()=>{
//   return await mongoose.model('Product').find({isPublished:true})
// }

//* * export the order schema model */
const product = mongoose.model("Product", productSchema);
module.exports = product;
