const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost:27017/BASE_TESTING',
{useNewUrlParser: true, useUnifiedTopology: true})

const Contact = mongoose.model('Diagram',{
  name: {type:String},
  active:{type:Boolean},
  notActive:{type:Boolean},
  complet:{type:Boolean}
})

module.exports = Contact
