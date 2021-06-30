// External Dependancies
import { Schema, model, Document } from "mongoose";
const ObjectId = Schema.Types.ObjectId;

type IUser = {
  _id: number;
  email: string;
  password: string;
};

const userSchema = new Schema({
  email: String,
  password: String,
});

export default model<IUser & Document>("User", userSchema);
