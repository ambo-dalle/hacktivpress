const User =  require('../models/user_models')
const bcrypt = require('bcrypt')
require('dotenv').config()
var jwt = require('jsonwebtoken')

var Signup = (req, res)=>{
  User.findOne({
    email : req.body.email
  })
  .then(response=>{
    if(!response){
      var insertUser = new User({
        name : req.body.name,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
        phone: req.body.phone
      })
      insertUser.save((err, result)=>{
        if(!err){
          res.send({
            result : result,
            msg : 'Data User Added, You may now log-in with the email you have chosen'
          })
        }else{
          res.send(err)
        }
      })
    }else{
      res.send({message : 'Email already exists'})
    }
  })
  .catch(error=>{
    res.send(error)
  })
}

var SignIn = (req, res)=>{
  User.findOne({
    email : req.body.email
  })
  .then(result=>{
    if(!result){
      res.send({
        msg : "Email not Registered"
      })
    }else{
      if(bcrypt.compareSync(req.body.password, result.password)){
        var token = jwt.sign({
          id : result._id,
          name : result.name,
          email : result.email,
        }, 'secret')
        res.send({
          token : token
        })
      }else{
        res.send({
          msg : "Password is wrong"
        })
      }
    }
  })
  .catch(err=>{
    res.send(err)
  })
}


module.exports = {
     Signup,
     SignIn
}
