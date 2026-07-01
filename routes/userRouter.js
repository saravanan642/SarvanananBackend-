const express = require('express')
const createrUser = require("../Controller/usercode")

const router = express.Router()

router.post("/new_user",createrUser)

router.get('/fetch-user',)

module.exports = router