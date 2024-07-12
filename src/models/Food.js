"use server";
import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  smallPrice: {
    type: Number,
    required: false,
  },
  mediumPrice: {
    type: Number,
    required: false,
  },
  largePrice: {
    type: Number,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Food = mongoose.models.Food || mongoose.model("Food", foodSchema);

export default Food;
