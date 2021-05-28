import { Schema, model, Document } from "mongoose";

export interface IRole extends Document {
  _id: string;
  description: string;
  __v: number;
}

const RoleSchema = new Schema({
  description: {
    type: String,
    require: true,
  },
});

export default model<IRole>("Role", RoleSchema);
