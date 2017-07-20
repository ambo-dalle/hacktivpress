const Artikel = require('../models/artikel_models')

var insertArtikel = (req,res,next) => {
     var insert = new Artikel (req.body)
     insert.save((err , response) =>{
          if(err) {
               res.send(err)
          } else {
               res.send(response)
          }
     })
}

var findAllArtikel = (req,res,next) =>{
     Artikel.find({})
     .populate('User')
     .exec((err, response)=>{
          if(err) {
               console.log(err);
          } else {
               res.send(response)
          }
     })
}

var updateArtikel =  (req,res,next)=>{
     Artikel.findById(req.params.id, (err,response)=>{
          Artikel.updateOne({
               _id : response._id
          }, {
               set: {
                    title: req.body.title || response.title,
                    content : req.body.content || response.content,
                    category : req.body.category || response.category,
                    author: req.body.author || response.author
               }
          }, (err, result) => {
               if(err) res.send(err)
               res.send(result)
          })
     })
}

var deleteArtikel = (req,res,next) =>{
     Artikel.remove({_id:req.params.id}, (err,docs)=>{
          if (err) {
               console.log(err.message);
          } else {
               res.send(docs)
          }
     })
}


module.exports = {
     insertArtikel,
     findAllArtikel,
     deleteArtikel,
     updateArtikel
}
