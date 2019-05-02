const router = require("express").Router();
const googleController = require("../../controllers/googleController");
// Gets all the books from Google for the root route
router
  .route("/")
  .get(googleController.findAll);
// Exports
module.exports = router;
