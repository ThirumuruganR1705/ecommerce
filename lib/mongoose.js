import mongoose from "mongoose";
import clientPromise from "./mongodb";
export  const mongooseConnect = async() => {
  if (mongoose.ConnectionStates === 1) {
    return mongoose.connection.asPromise();
  } else {
    await mongoose.connect(process.env.MONGODB_URI);
  }
};