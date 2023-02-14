const express = require('express')
const router = express.Router()

const usersCtrl = require('../../controllers/api/notes')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/', ensureLoggedIn, usersCtrl.create)
router.get('/check-token', ensureLoggedIn, usersCtrl.index)

module.exports = router