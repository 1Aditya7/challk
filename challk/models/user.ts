import mongoose, { Schema, Document, Model, models } from "mongoose";

// Define an interface representing a user document in MongoDB.
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

// Create a schema corresponding to the document interface.
const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create a model based on the schema.
const User: Model<IUser> = models.User || mongoose.model<IUser>("User", userSchema);

export default User;
