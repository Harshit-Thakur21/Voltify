import Category from "../models/products.model.js";

export const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    // console.log({ category })
    const cat = await Category.findOne({
      id: category // Searching within the array of categories for a matching `id`
    });

    if (!cat) {
      return res.status(404).json({ message: "Category not found" });
    }
    // console.log(cat);
    // Find the specific category from the categories array


    res.json(cat.products); // Responding with products of the selected category
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Category.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const categories = await Category.find();

    for (const category of categories) {
      const product = category.products.find(p => p.id === id);
      if (product) {
        return res.json(product);
      }
    }

    res.status(404).json({ message: "Product not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};