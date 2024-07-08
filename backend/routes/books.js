const express = require('express');
const router = express.Router();
const Book = require('../models/Review');

// Endpoint to fetch book titles from MongoDB
router.get('/titles', async (req, res) => {
    try {
        const titles = await Book.find().select('title author'); // Adjust the query to match your schema
        res.json(titles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;