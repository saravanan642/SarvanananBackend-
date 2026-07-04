const express = require("express");
const { createrUser, fetchUser, fetchUserEmail} = require("../Controller/usercode");

const router = express.Router();

router.post("/new_user", createrUser);
router.get("/fetch-user", fetchUser);
router.get("/fetch-user/:email",fetchUserEmail)

module.exports = router;