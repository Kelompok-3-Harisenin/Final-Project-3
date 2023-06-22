const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { append } = require("express/lib/response");
const app = express();
const { sequelize } = require("./models");
const db = require("./models");
const thumbnail = require("./models/thumbnail");
const detailproduct = require("./models/detailproduct");

app.use(express.urlencoded());
app.use(express.json());
app.use(cors("*"));
app.use(morgan("tiny"));

const itemsPerPage = 2; // Number of items (columns) to display per page

app.get('/api/products', async (req, res) => {
  try {
    const page = parseInt(req.query.page || 1, 10); // Get the page number from the query parameter, default to 1 if not provided

    // Calculate the offset based on the page number and items per page
    const offset = (page - 1) * itemsPerPage;

    // Retrieve the desired columns for the page based on the category
    const products = await db.detailProduct.findAll({
      attributes: ['category'],
      where: {
        category: 'Shirt',
      },
      order: [['id', 'ASC']],
      offset,
      limit: itemsPerPage,
    });

    return res.status(200).json({
      data: products,
    })
 
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



// app.get("/Atest", async(req,res) => {
//     const users = await db.User.findOne();

//     return res.status(200).json({
//         data: users,
//     });
// });

app.listen(3001, () => {
    console.clear();
    console.debug("Server running on port http://localhost:3001");
  });