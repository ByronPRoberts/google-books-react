const router = require("express").Router();
const bookController = require("../../bookController/bookController");

router.route("/")
	.get(bookController.findAll);
	// .post(bookController.create);

router.get("api/test", (req,res) => {
	console.log("testing")
	res.send("testing");
});

router 
	.route("/:id")
	.get(bookController.findOne)
	.put(bookController.update)
	.delete(bookController.delete);

module.exports = router;