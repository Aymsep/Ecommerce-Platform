const mongoose = require('mongoose')
const constants = require('../../Config/constants');
const { HashPassword, VerifyPassword } = require('../../Helpers/Hashing');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: [true, constants.EMAIL_REQUIRED],
    unique: [true, constants.EMAIL_EXISTS],
    validate: {
      validator: function (value) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
      },
      message: constants.INVALID_EMAIL_FORMAT
    }
  },
  role: {
    type: String,
    immutable: true,
    default: 'User'
  },
  username: {
    type: String,
    required: [true, constants.USERNAME_REQUIRED],
    unique: [true, constants.USERNAME_EXISTS]
  },
  password: {
    type: String,
    required: [true, constants.PASSWORD_REQUIRED]
  },
  active: {
    type: Boolean,
    default: true
  },
  lastLogin: {
    type: Number,
    default: Date.now
  },
}, { timestamps: true, versionKey: false })


userSchema.post('save', function (error, doc, next) {
  if (error.name === 'MongoServerError' && error.code === 11000) {
    const field = Object.keys(error.keyValue)[0]
    let message
    switch (field) {
      case 'id': message = constants.ID_EXISTS; break
      case 'username': message = constants.USERNAME_EXISTS; break
      case 'email': message = constants.EMAIL_EXISTS; break
      default: message = `${field} already exists.`; break
    }
    next(new Error(message))
  } else {
    next(error)
  }
})

userSchema.pre('findOneAndUpdate', async function(next) {
  try {
    const update = this.getUpdate();
    const user = await this.model.findOne(this.getQuery());

    if (update.password) {
      const isModified = await VerifyPassword(update.password, user.password);

      if (!isModified) {
        update.password = await HashPassword(update.password);
      } else {
        delete update.password; // Do not update password if not modified
      }
    }
    
    return next();
  } catch (error) {
    next(error); // Pass the error to the next middleware/hook
  }
});




module.exports = mongoose.model('User', userSchema)
