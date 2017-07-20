const express = require('express')
const router = express.Router()
const ArtikelController = require('../controllers/artikel_controllers')
const jwt = require('../helper/verify')

router.post('/', ArtikelController.insertArtikel)
router.get('/', ArtikelController.findAllArtikel)
router.delete('/:id', ArtikelController.deleteArtikel)
router.put('/:id', ArtikelController.updateArtikel)

module.exports = router
