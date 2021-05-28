import { Schema, model, Document } from "mongoose";

import { IRole } from "./Role";

export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: IRole;
  created_at: Date;
  __v: number;
}

const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: "Role",
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export default model<IUser>("User", UserSchema);
