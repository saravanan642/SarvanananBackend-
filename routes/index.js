const express = require('Express')

const router =express.Router()

const user = require("./userRouter")

router.use(user)

module.exports = router