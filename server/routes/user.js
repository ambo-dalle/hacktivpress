const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user_controllers')

router.post('/signin', UserController.SignIn)
router.post('/signup', UserController.Signup)
router.get('/', UserController.findAllUsers)
router.get('/:id', UserController.findOneUser)
router.delete('/:id', UserController.deleteUser)
router.put('/:id', UserController.updateUser)

module.exports = router
