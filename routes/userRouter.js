const express = require("express");
const { createrUser, fetchUser, fetchUserEmail, deleteuserEmail,deleteuser,updateuser} = require("../Controller/usercode");

const router = express.Router();

router.post("/new_user", createrUser);
router.get("/fetch-user", fetchUser);
router.get("/fetch-user/:email",fetchUserEmail);
router.delete("/delete-user/:email",deleteuserEmail);
router.delete("/delete-user",deleteuser);
router.put("/update-user/:email",updateuser);

module.exports = router;