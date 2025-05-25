// import mongoose from "mongoose";

// let cached = global.mongoose || { promise: null, conn: null };

// export default async function connectDB() {
//   if (cached.conn) return cached.conn;

//   if (!cached.promise) {
//     cached.promise = mongoose
//       .connect(`${process.env.MONGODBURL}`)
//       .then((mongoose) => mongoose);
//   }

//   try {
//     cached.conn = await cached.promise;
//     // conn = await mongoose
//     //   .connect(`${process.env.MONGODBURL}`)
//     //   .then((mongoose) => mongoose);
//   } catch (error) {
//     console.log("Error connecting to MONGODB", error);
//   }

//   return cached.conn;
// }






// lib/mongoose.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODBURL;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local or Vercel'
  );
}

/**
 * Global is used here to maintain a cache of the connection across hot reloads in dev.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      // Optional: uncomment if you're using Mongoose 7+
      // serverSelectionTimeoutMS: 5000,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
