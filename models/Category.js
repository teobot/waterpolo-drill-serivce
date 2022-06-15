// getting access to schema
import mongoose from "mongoose";

export const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  drills: {
    type: Array,
    default: [],
  },
});

export default mongoose.models.Category ||
  mongoose.model("Category", categorySchema);
