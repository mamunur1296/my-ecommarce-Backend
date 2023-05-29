const Product = require("../../model/productModel");


// const getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find();

//     res.json({ data: products });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

const getAllProducts = async (req, res) => {
  try {
    let query = Product.find();

    // Filtering
    const { category, brand, minPrice, maxPrice } = req.query;

    if (category) {
      query = query.where('category').equals(category);
    }

    if (brand) {
      query = query.where('brand').equals(brand);
    }

    if (minPrice && maxPrice) {
      query = query.where('price').gte(minPrice).lte(maxPrice);
    } else if (minPrice) {
      query = query.where('price').gte(minPrice);
    } else if (maxPrice) {
      query = query.where('price').lte(maxPrice);
    }

    // Sorting
    const { sortBy, sortOrder } = req.query;

    if (sortBy) {
      const sortOptions = { title: 'title', price: 'price' };
      const sortField = sortOptions[sortBy];
      const sortOrderValue = sortOrder === 'desc' ? -1 : 1;
      query = query.sort({ [sortField]: sortOrderValue });
    }

    // Limiting and Pagination
    const { limit, page } = req.query;
    const pageSize = parseInt(limit) || 10;
    const currentPage = parseInt(page) || 1;
    const skip = (currentPage - 1) * pageSize;
    query = query.skip(skip).limit(pageSize);

    // Field Limiting  
    const { fields } = req.query;
    if (fields) {
      const selectedFields = fields.split(',').join(' ');
      query = query.select(selectedFields);
    }

    // Execute the query
    const products = await query.exec();

    res.json({ data: products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
};


// http://localhost:3000/products?fields=title,price,category.
// http://localhost:3000/products?limit=10&page=1.
// GET /products?category=laptop&brand=Apple&minPrice=1000&maxPrice=2000
// GET /products?sortBy=price&sortOrder=desc 
// GET /products?category=phone&brand=Samsung&minPrice=500&maxPrice=1000&sortBy=title&sortOrder=asc

// GET /products?category=laptop&minPrice=500&maxPrice=1500&fields=title,price&sortBy=price&sortOrder=asc&limit=10&page=2





module.exports = getAllProducts;
