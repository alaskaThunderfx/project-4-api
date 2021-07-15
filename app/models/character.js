const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  inventory: {
    type: Array,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Character', characterSchema)
