import Product from "../models/Product.js";

// @desc    Get all products
// @route   GET /api/products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single product
// @route   GET /api/products/:id
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create product (Admin only)
// @route   POST /api/products
export const createProduct = async (req, res) => {
  try {
    const product = new Product({
      name,
      description,
      price,
      category,
      image: req.file ? `/uploads/${req.file.filename}` : "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQVSfGwO9ugfvmQGM5kiLzw6GqIVlmx4cReyMA8HDkuaea3Ot5ogJDQ7q2N8okc0iCKct8NSh86V9JqDCVxoEEA9Owm-LKTDeRUBHszYyI",
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
 