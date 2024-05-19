const mongoose = require("mongoose");
require("dotenv").config();

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log("create new connection DB");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
