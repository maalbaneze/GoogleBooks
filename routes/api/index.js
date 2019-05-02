const path = require("path");
const router = require("express").Router();
// requires the two route files below
const bookRoutes = require("./books");
const googleRoutes = require("./google");

router.use("/books", bookRoutes);

router.use("/google", googleRoutes);
//exports the routes
module.exports = router;
