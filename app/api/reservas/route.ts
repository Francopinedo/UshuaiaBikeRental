import mongoose, { Schema, models, model } from "mongoose";

const ReservaSchema = new Schema({
  bicicletaId: { type: Schema.Types.ObjectId, ref: 'Bicicleta', required: true },
  cantidad: { type: Number, default: 1 }, // Nuevo campo
  nombreCliente: { type: String, required: true },
  email: { type: String, required: true },
  fechaInicio: { type: Date, required: true },
  fechaFin: { type: Date, required: true },
  metodoPago: { type: String, enum: ['EFECTIVO', 'TARJETA'], default: 'EFECTIVO' }, // Nuevo campo
  total: { type: Number }, // Nuevo campo
  estado: { type: String, enum: ['ACTIVA', 'FINALIZADA'], default: 'ACTIVA' }
}, { timestamps: true });

const Reserva = models.Reserva || model("Reserva", ReservaSchema);
export default Reserva;