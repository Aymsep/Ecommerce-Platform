exports.STATUS_SUCCESS = 'success'
exports.STATUS_FAILURE = 'failure'




/* HTTP status code constant starts */
module.exports.SERVER_ERROR_HTTP_CODE = 412;
module.exports.SERVER_NOT_ALLOWED_HTTP_CODE = 503;
module.exports.SERVER_OK_HTTP_CODE = 200;
module.exports.SERVER_CREATED_HTTP_CODE = 201;
module.exports.SERVER_UPDATED_HTTP_CODE = 204;
module.exports.SERVER_NOT_FOUND_HTTP_CODE = 404;
module.exports.SERVER_INTERNAL_ERROR_HTTP_CODE = 500;
module.exports.SERVER_BAD_REQUEST_HTTP_CODE = 400;
module.exports.SERVER_UNAUTHORIZED_HTTP_CODE = 401;
module.exports.SERVER_FORBIDDEN_HTTP_CODE = 403;
module.exports.SERVER_NO_CONTENT_HTTP_CODE = 204;
module.exports.SERVER_PARTIAL_CONTENT_HTTP_CODE = 206;
module.exports.SERVER_MOVED_PERMANENTLY_HTTP_CODE = 301;
module.exports.SERVER_FOUND_HTTP_CODE = 302;
module.exports.SERVER_SEE_OTHER_HTTP_CODE = 303;
module.exports.SERVER_NOT_MODIFIED_HTTP_CODE = 304;
module.exports.SERVER_TEMPORARY_REDIRECT_HTTP_CODE = 307;
module.exports.SERVER_PERMANENT_REDIRECT_HTTP_CODE = 308;
module.exports.SERVER_BAD_GATEWAY_HTTP_CODE = 502;
module.exports.SERVER_SERVICE_UNAVAILABLE_HTTP_CODE = 503;
module.exports.SERVER_GATEWAY_TIMEOUT_HTTP_CODE = 504;
module.exports.SERVER_HTTP_VERSION_NOT_SUPPORTED_HTTP_CODE = 505;
/* Additional HTTP status code constants */

exports.POST_SUCCESS_MESSAGE = 'Data successfully posted'
exports.POST_FAILURE_MESSAGE = 'Data failed to be posted'

exports.PATCH_SUCCESS_MESSAGE = 'Data successfully updated'
exports.PATCH_FAILURE_MESSAGE = 'Data failed to be updated'

exports.GET_SUCCESS_MESSAGE = 'Data successfully listed'
exports.GET_FAILURE_MESSAGE = 'Data failed to be listed'

exports.DELETE_SUCCESS_MESSAGE = 'Data successfully removed'
exports.DELETE_FAILURE_MESSAGE = 'Data failed to be removed'

exports.DELETE_SUCCESS_MESSAGE = 'Data successfully deleted'
exports.DELETE_FAILURE_MESSAGE = 'Data failed to be deleted'

//* DB Error Messages
exports.ID_REQUIRED = 'User Id is missing'
exports.ID_EXISTS = 'User Id is already exists'

exports.USERNAME_EXISTS = 'Username already exists'
exports.USERNAME_REQUIRED = 'Please provide a username'

exports.EMAIL_EXISTS = 'Email already exists'
exports.EMAIL_REQUIRED = 'Please provide an email'
exports.INVALID_EMAIL_FORMAT = 'Please provide a valid email'

exports.PASSWORD_REQUIRED = 'Please provide a password'

//* API Messages
exports.NO_USER_FOUND = 'Users not found.'
exports.BAD_MAX_LIMIT = 'The maximum number of users per page exceeds the allowed limit.'

//* AUTH
exports.USER_NOT_FOUND = 'User not found.'
exports.PASSWORD_INCORRECT = 'Password incorrect'
exports.ACCESS_DENIED = 'Access denied'
exports.TOKEN_NOT_VALID = 'Token not valid '
exports.INSUFFICIENT_PERMISSIONS = 'Insufficient permissions'
exports.INACTIVE_ACCOUNT = 'Account is inactive'
exports.NO_USERNAME_EMAIL = 'Invalid credentials: username or email is missing'
exports.NO_PASSWORD = 'Invalid credentials: password is missing'

//* USER VALIDATION
exports.ROLE_INVALID = 'Invalid user role'
exports.SHORT_PASSWORD = 'Password is too short'
exports.WEAK_PASSWORD = 'Password is weak'
exports.LONG_PASSWORD = 'Password too long: must be between 8 and 30 characters.'
exports.LONG_USERNAME = 'Username too long: must be between 6 and 20 characters.'
exports.LONG_EMAIL = 'Email too long: must be less then 254.'
exports.LONG_FIRST_NAME = 'First name too long: must be less then 50.'
exports.LONG_LAST_NAME = 'Last name too long: must be less then 50.'

//* UPDATE
exports.EMPTY_REQUEST_FOR_UPDATE = 'Empty request, nothing to update'
exports.PASSWORD_REMAIN = 'Password remains unchanged; no update necessary.'

//* File upload
exports.LIMIT_FILE_SIZE = 'File exceeds the fileSize limit (5MB)'
exports.LIMIT_FILE_COUNT = 'Number of uploaded files exceeds the limit (5 Files)'
exports.LIMIT_FIELD_KEY = 'The field name in the form does not match the expected field name (image)'
exports.LIMIT_UNEXPECTED_FILE = 'The field name in the form does not match the expected field name (image)'
exports.LIMIT_FIELD_VALUE = 'The field value in the form does not match the expected field value'
exports.LIMIT_PART_COUNT = 'Number of uploaded parts exceeds the limit'
exports.LIMIT_PART_SIZE = 'Number of uploaded parts exceeds the limit'
exports.IMAGE_FORMAT_NOT_SUPPORTED = 'Image format not supported : Only JPEG, JPG, and PNG files are allowed.'
exports.BAD_MAX_LIMIT = 'The maximum number of users per page exceeds the allowed limit.'

//* CATEGORY VALIDATION
exports.CATEGORY_NOT_FOUND = 'Category not found.'
exports.SHORT_CATEGORY = 'Category name must be at least 2 characters long.'
exports.CATEGORY_NAME_REQUIRED = 'Category name is required'
exports.MISSING_ID = 'Category Id is required'
exports.CATEGORY_FOUND_SUCCESSFULLY = 'category retrieved successfully'
exports.EMPTY_REQUEST_FOR_UPDATE = 'No data to update'
exports.CATEGORY_NAME_TOO_LONG = 'Category name is too long, it should be 30 characters max'
exports.CATEGORY_IMAGE_TOO_LONG = 'Category Image url is too long'
exports.CATEGORY_IMAGE_TOO_SHORT = 'Category Image url is too short'
exports.CATEGORY_NAME_DUPLICATED = 'Category name must be unique.'
exports.CATEGORY_ID_DUPLICATED = 'category ID must be unique.'
exports.CATEGORY_ACTIVE_INVALID_TYPE = 'Category activeness must be true or false'
exports.BAD_MAX_LIMIT = 'The maximum number of users per page exceeds the allowed limit.'

//* Subcategories Messages
exports.SUBCATEGORY_EXISTS = 'Subcategory name is already exist.'
exports.SUBCATEGORY_REQUIRED = 'Subcategory name is required.'
exports.SHORT_SUBCATEGORY_NAME = 'Subcategory name must be at least 2 characters long.'
exports.SUBCATEGORY_NOT_FOUND = 'Subcategory Not Found.'
exports.SUBCATEGORY_NOT_UNIQUE = 'Subcategory name is not unique.'
exports.MISSING_ID = 'Subcategory Id is required'
exports.SUBCATEGORY_FOUND_SUCCESSFULLY = 'Subcategory retrieved successfully'
exports.EMPTY_REQUEST_FOR_UPDATE = 'No data to update'
exports.CATEGORY_NOT_FOUND = 'Category Not Found.'
exports.CATEGORY_ID_REQUIRED = 'Category Id is required'
exports.SUBCATEGORY_ACTIVE_INVALID_TYPE = 'Subcategory activeness must be true or false'
exports.SUBCATEGORY_IMAGE_TOO_LONG = 'Subcategory image must be less than 150 characters'
exports.SUBCATEGORY_NAME_TOO_LONG = 'Subcategory name must be less than 30 characters'
exports.SUBCATEGORY_IMAGE_TOO_SHORT = 'Subcategory image must be at least 2 characters long'
exports.NO_USER_FOUND = 'Users not found.'
exports.BAD_MAX_LIMIT =
  'The maximum number of users per page exceeds the allowed limit.'

// * DB Products error messages
exports.PRODUCT_ID_REQUIRED = 'Product Id is missing'
exports.PRODUCT_ID_UNIQUE = 'Product Id is already exists'
exports.PRODUCT_SKU_REQUIRED = 'Product SKU is missing'
exports.PRODUCT_SKU_UNIQUE = 'Product SKU is already exists'
exports.PRODUCT_NAME_REQUIRED = 'Product Name is missing'
exports.PRODUCT_NAME_UNIQUE = 'Product Name is already exists'
exports.PRODUCT_CATEGORY_REQUIRED = 'Product Category is missing'
exports.PRODUCT_PRICE_REQUIRED = 'Product Price is missing'
exports.PRODUCT_PRICE_MIN = 'Product price should be greater than 0'
exports.PRODUCT_DISCOUNT_PRICE_MIN = 'Product discount price should be greater than 0'
exports.SUBCATEGORY_NOT_FOUND = 'Subcategory not found'

//* UPDATE
exports.EMPTY_REQUEST_FOR_UPDATE = 'Empty request, nothing to update'

// * API Products  messages
exports.NO_PRODUCT_FOUND = 'Product not found.'

//* AUTH
exports.USER_NOT_FOUND = 'User not found.'
exports.PASSWORD_INCORRECT = 'Password incorrect'
exports.ACCESS_DENIED = 'Access denied'
exports.TOKEN_NOT_VALID = 'Token not valid'
exports.INSUFFICIENT_PERMISSIONS = 'Insufficient permissions'
exports.INACTIVE_ACCOUNT = 'Account is inactive'
exports.NO_USERNAME_EMAIL = 'Invalid credentials: username or email is missing'
exports.NO_PASSWORD = 'Invalid credentials: password is missing'

//* Database order errors messages */
exports.ID_ORDER_REQUIRED = 'Order Id is required'
exports.ID_ORDER_EXISTS = 'Order Id is already exists'
exports.ID_CUSTOMER_REQUIRED = 'Costumer Id is required'
exports.PRODUCT_PRICE_REQUIRED = 'Product Price  is required'
exports.PRODUCT_QUANTITY_MIN_INVALID = 'Quantity Must Be Greater Than 1'
exports.PRODUCT_REQUIRED = 'Product is required for order item.'
exports.ORDER_ITEM_REQUIRED = 'At least one order item is required for the order.'
exports.INVALID_STATUS = 'Invalid order status. Please double-check and ensure it is correctly specified.'

//* order API Messages
exports.NO_ORDER_FOUND = 'Orders not found.'
exports.BAD_ORDER_STATUS_TRANSITION = 'Invalid status transition'

exports.CATEGORY_NOT_FOUND = 'Category not found.'


// * FIELDS
exports.FIELD_REQUIRED = 'Field is required'
exports.FIELD_UNIQUE = 'Field must be unique'
exports.FIELD_NOT_FOUND = 'Field not found'
exports.INVALID_FIELDS = 'Field is invalid'

// * Products
exports.PRODUCT_CREATED = 'Product created successfully'
exports.NO_PRODUCTS_FOUND = 'Products not found.'
exports.PRODUCT_ID_REQUIRED = 'Product Id is required'
exports.NO_PRODUCT_FOUND = 'Product not found.'
exports.PRODUCT_UPDATED = 'Product updated successfully'
exports.PRODUCT_DELETED = 'Product deleted successfully'
exports.PRODUCT_FAILED_CREATION = 'Product failed to be created'
exports.PRODUCT_FAILED_UPDATE = 'Product failed to be updated'
exports.PRODUCTS_IMAGE = 'Product images is required'
exports.PRODUCTS_FETCHED = 'Products fetched successfully'
exports.PRODUCT_FAILED_DELETE = 'Product failed to be deleted'

// * api messages
exports.UNAUTHORIZED = 'Unauthorized'
exports.TOKEN_ERROR = 'Token error'