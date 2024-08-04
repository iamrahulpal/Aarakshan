const express = require("express");
const router = express.Router();

router.post("/create", require("../controllers/Patient/create").process); // Create Book
router.get("/:id", require("../controllers/Patient/getSingle").process); // Get single patient
// router.get("/", require("../controllers/book/getAllBook").process); // Get all book
// router.put("/:id", require("../controllers/book/updateBook").process); // Update book
// router.delete("/:id", require("../controllers/book/deleteBook").process); // Delete book

module.exports = router;
