const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
var cors = require('cors')

var db_config = {
     development : 'mongodb://localhost/hacktive-press',
     test : 'mongodb://localhost/hacktive-tes'
}

var app_env = app.settings.env

mongoose.connect(db_config[app_env], function(){
     console.log('connect to ' +db_config[app_env]);
});

var artikel = require('./routes/artikel');
var users = require('./routes/user');

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/api/artikel', artikel)
app.use('/api/users', users)

app.listen(3000, ()=>{
     console.log('connect server');
})

module.exports = app;
