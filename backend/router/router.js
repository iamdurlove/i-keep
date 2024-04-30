const express = require("express");
const siteController = require("../controllers/site-controller");
const router = express.Router();

// to get all  data
router.route("/services").get(siteController.getAllNotes);

// post data
router.route("/add-service").post(siteController.postNote);

module.exports = router;
