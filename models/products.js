import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  description: String,
  price: String
});

const product = mongoose.model("products", productSchema);
export default product