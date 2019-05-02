const router = require("express").Router();
const bookController = require("../../controllers/bookController");
// Root route for getting all books via the book controller
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);
// Root route for getting, updating, and deleting a slected book via the book controller 
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);
// Exports
module.exports = router;
