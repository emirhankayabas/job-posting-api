import mongoose from "mongoose";

const connectDatabase = async () => {
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    throw new Error("MongoDB uri bulunamadı.");
  }

  try {
    const connection = await mongoose.connect(mongoURI);

    if (connection) {
      console.log("MongoDB bağlantısı başarılı oldu.");
    }
  } catch (error) {
    throw new Error("MongoDB bağlantısı başarısız oldu.");
    process.exit(1);
  }
};

export default connectDatabase;
