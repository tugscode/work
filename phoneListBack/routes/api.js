const express = require("express");
const router = express.Router();
const PhoneController = require("../controller/PhoneController")

router.get('/phone', PhoneController.getPhone)
router.post("/createPhone", PhoneController.createPhone)
router.put("/updatePhone/id/:id", PhoneController.updatePhone) 
router.delete('/deletePhone/id/:id', PhoneController.deletePhone)
 
module.exports = router