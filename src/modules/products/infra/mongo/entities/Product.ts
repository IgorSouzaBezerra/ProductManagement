import { Schema, model } from "mongoose";

export interface IProduct {
  _id: string;
  name: string;
  category: string;
  amount: number;
  value: number;
  available: boolean;
  created_at: Date;
  __v: number;
}

const ProductSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  amount: {
    type: Number,
    require: true,
  },
  value: {
    type: Number,
    require: true,
  },
  available: {
    type: Boolean,
    require: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export default model<IProduct>("Product", ProductSchema);
