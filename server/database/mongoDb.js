import mongoose from "mongoose";

export default async function connect() {
  await mongoose.connect("mongodb://localhost:27017/edulfin");
  console.log("database connected");
}
