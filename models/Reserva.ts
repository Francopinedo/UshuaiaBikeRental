import mongoose, { Schema, models, model } from "mongoose";

const ReservaSchema = new Schema({
  bicicletaId: { type: Schema.Types.ObjectId, ref: 'Bicicleta', required: true },
  nombreCliente: { type: String, required: true },
  email: { type: String, required: true },
  fechaInicio: { type: Date, required: true },
  fechaFin: { type: Date, required: true },
  estado: { type: String, enum: ['ACTIVA', 'FINALIZADA'], default: 'ACTIVA' }
}, { timestamps: true });

const Reserva = models.Reserva || model("Reserva", ReservaSchema);
export default Reserva;