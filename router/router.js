const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const auth = require("../middleware/auth");

router.post("/api/register", userController.userRegister);
router.post("/api/login", userController.userLogin);
router.post("/api/forget", userController.forgetPassword);

router.use(auth);


module.exports = router;
