const express = require("express");
const siteController = require("../controllers/site-controller");
const router = express.Router();

// to get all  data
router.route("/note").get(siteController.getAllNotes);

// post data
router.route("/note").post(siteController.postNote);

//delete note
router.route("/note/:id").delete(siteController.deleteNote);

module.exports = router;
