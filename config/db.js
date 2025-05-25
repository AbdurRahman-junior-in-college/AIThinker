import mongoose from "mongoose";

let cached = global.mongoose || { promise: null, conn: null };

export default async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(`${process.env.MONGODBURL}`)
      .then((mongoose) => mongoose);
  }

  try {
    cached.conn = await cached.promise;
    // conn = await mongoose
    //   .connect(`${process.env.MONGODBURL}`)
    //   .then((mongoose) => mongoose);
  } catch (error) {
    console.log("Error connecting to MONGODB", error);
  }

  return cached.conn;
}
