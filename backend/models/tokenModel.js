const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
  user: {
     type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
       required: true
     },
  token: {
     type: String, required: true
     },
  createdAt: { 
    type: Date, 
    default: Date.now, 
    expires: 3600
 }, // Token expires in 1 hour
});
Token=mongoose.model('Token', TokenSchema);
module.exports = Token
