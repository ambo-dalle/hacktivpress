const express = require('express')
const router = express.Router()
const ArtikelController = require('../controllers/artikel_controllers')
const jwt = require('../helper/verify')

router.post('/', jwt.tokenVerify, ArtikelController.insertArtikel)
router.get('/', jwt.tokenVerify, ArtikelController.findAllArtikel)
router.get('/:id', ArtikelController.findOneArtikel)
router.delete('/:id', jwt.tokenVerify, ArtikelController.deleteArtikel)
router.put('/:id', jwt.tokenVerify, ArtikelController.updateArtikel)

module.exports = router
