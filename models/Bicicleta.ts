import mongoose, { Schema, model, models } from "mongoose";

const BicicletaSchema = new Schema({
  nombre: { type: String, required: true }, // Ej: "Volta Razz"
  categoria: { type: String, required: true }, // Ej: "STANDARD"
  disponible: { type: Boolean, default: true },
  talles: String, // Ej: "S, M, L"
  rodado: Number, // Ej: 29
  transmision: String,
  horquilla: String,
  diario: String, // Valor Diario
  medio: String,  // Valor Medio Día
  uso: String,
  stock: { type: Number, default: 1 }, 
  imagenUrl: String
}, { timestamps: true });

// Exportamos el modelo; si ya existe lo reutiliza para evitar errores en Next.js
const Bicicleta = models.Bicicleta_v2 || model("Bicicleta_v2", BicicletaSchema);
export default Bicicleta;