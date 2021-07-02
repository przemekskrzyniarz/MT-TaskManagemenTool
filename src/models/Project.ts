// External Dependancies
import { Schema, model } from "mongoose";

const projectSchema = new Schema({
  title: String,
  description: String,
  views: Number,
});

export default model("Project", projectSchema);
