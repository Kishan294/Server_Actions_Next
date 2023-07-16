import mongoose from "mongoose";

let isConnected = false;

const url = process.env.MONGO_URI;

const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(url, {
      dbName: "Trial",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDb;
