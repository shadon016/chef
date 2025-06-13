import mongoose from "mongoose";

async function dbConnect() {
  try {
    const connection = await mongoose.connect(process.env.DBSTRING);
    return connection;
  } catch (err) {
    throw new Error(err.message);
  }
}

export default dbConnect;
