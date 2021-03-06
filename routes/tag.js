const express = require("express");
const router = express.Router();
const tagController = require("../Controllers/tag");
const checkAuth = require("../middleware/check-auth");

router.get("/:tags", tagController.GetTags);

module.exports = router;
