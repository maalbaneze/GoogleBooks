const path = require("path");
const router = require("express").Router();
// Requires the routes files in the api folder
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
// Routing path for production
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);
// Exports
module.exports = router;
