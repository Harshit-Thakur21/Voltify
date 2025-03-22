import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   brand: {
//     type: String,
//     required: true
//   },
//   price: {
//     type: Number,
//     required: true
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   image: {
//     type: String,
//     required: true
//   },
//   category: {
//     type: String,
//     required: true,
//     enum: ['laptops', 'phones', 'tv', 'accessories']
//   },
//   specs: {
//     type: Map,
//     of: String
//   },
//   inStock: {
//     type: Boolean,
//     default: true
//   },
//   discount: {
//     type: Number,
//     default: 0
//   }
// }, { timestamps: true });

// Specs Schema
const specsSchema = new mongoose.Schema({
    processor: { type: String, required: false },
    ram: { type: String, required: false },
    storage: { type: String, required: false },
    display: { type: String, required: false },
    os: { type: String, required: false },
});

// Product Schema
const productSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String },
    specs: specsSchema,
    inStock: { type: Boolean, default: true },
    discount: { type: Number, default: 0 },
});

// Category Schema
const categorySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },
    products: [productSchema],
});

const Category = mongoose.model('Category', categorySchema);

export default Category


// const addToDatabase = async () => {

//     categories.forEach(category => {
//         new Category(category).save();
//     })
//     //      const newProduct = new Product({
//     //          categories: categories
//     //  }) 
//     //await newProduct.save();
// }

//addToDatabase()