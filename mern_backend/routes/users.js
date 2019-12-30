var express = require('express');
var router = express.Router();
const userController = require("../controllers/users")
/* GET users listing. */
router.get('/', userController.fetchAll);
router.get("/:id", userController.findOne)
router.post("/", userController.insertOne)
router.get('/:page/:size', userController.fetchAll);
router.put("/:id", userController.update)
router.delete("/:id", userController.delete)
module.exports = router;