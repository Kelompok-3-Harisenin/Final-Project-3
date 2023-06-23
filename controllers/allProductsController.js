const express = require('express');
const router = express.Router();
const { sequelize } = require("../models");
const itemsPerPage = 2; // Number of items (columns) to display per page

router.get('/allproducts', async (req, res) => {
  try {
    const page = parseInt(req.query.page || 1, 10); // Get the page number from the query parameter, default to 1 if not provided

    // Calculate the offset based on the page number and items per page
    const offset = (page - 1) * itemsPerPage;
    // http://localhost:3001/products/allproducts?page=1

    const [products] = await sequelize.query(
      "SELECT DISTINCT p.*, t.thumbnailPreview, t.thumbnailUrl1, t.thumbnailUrl2, t.thumbnailUrl3 FROM detailProducts AS p JOIN thumbnails AS t ON p.thumbnail = t.id LIMIT 1;"
    );
      return res.status(200).json({
        data: products,
      })
      
    } catch (error) {
      console.error('Error retrieving data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;