const router = require("express").Router();
const bookRoutes = require("./book");
 
router.use(bookRoutes);

module.exports = router;