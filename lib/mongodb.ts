import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export const dbConnect = async () => {
  // 1. Verificamos si ya hay una conexión para no abrir miles
  if (mongoose.connection.readyState >= 1) return;

  try {
    // 2. Conectamos usando la URI de tu .env.local
    await mongoose.connect(MONGODB_URI!);
    console.log("🚀 Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("❌ Error de conexión:", error);
    throw new Error("No se pudo conectar a la base de datos");
  }
};