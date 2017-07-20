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

var findOneArtikel = (req,res,next) => {
     Artikel.findOne({_id: req.params.id})
     .populate('User')
     .exec(function(err, result) {
          if(result) {
               res.send(result)
          } else {
               res.send(err)
          }
     })
}


var updateArtikel = (req, res,next)=>{
  Artikel.findById(req.params.id, (err, docs) => {
   if (err) res.send(err)
   Artikel.updateOne({
      _id: docs._id
   }, {
      $set: {
           title : req.body.title || docs.title,
           content : req.body.content || docs.content,
           category : req.body.category || docs.category,
           author: req.body.author || docs.author
      }
   }, (err, result) => {
      if (err) res.send(err)
      res.send({
           result : result,
           msg : "Update Successfull"
      })
   })
  })
}

var deleteArtikel = (req,res,next) =>{
     Artikel.remove({_id:req.params.id}, (err,docs)=>{
          if (err) {
               console.log(err.message);
          } else {
               res.send({
                    docs: docs,
                    msg: "Delete Successfull"
               })
          }
     })
}


module.exports = {
     insertArtikel,
     findAllArtikel,
     findOneArtikel,
     deleteArtikel,
     updateArtikel
}
