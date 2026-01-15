import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Reserva from "@/models/Reserva";
import Bicicleta from "@/models/Bicicleta";

// DEBE ser POST en mayúsculas para que Vercel lo reconozca
export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    
    // Extraemos los datos que coinciden con tu esquema de Reserva
    const { bicicletaId, cantidad, nombreCliente, email, fechaInicio, fechaFin, metodoPago, total } = body;

    // 1. Validar existencia y stock
    const bici = await Bicicleta.findById(bicicletaId);
    if (!bici || bici.stock < cantidad) {
      return NextResponse.json({ error: "Stock insuficiente" }, { status: 400 });
    }

    // 2. Crear la reserva usando tu esquema actual
    const nuevaReserva = await Reserva.create({
      bicicletaId,
      cantidad,
      nombreCliente,
      email,
      fechaInicio,
      fechaFin,
      metodoPago,
      total,
      estado: 'ACTIVA'
    });

    // 3. Descontar stock
    await Bicicleta.findByIdAndUpdate(bicicletaId, { 
      $inc: { stock: -Math.abs(cantidad) } 
    });

    return NextResponse.json(nuevaReserva, { status: 201 });
  } catch (error: any) {
    console.error("Error en POST reservas:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Opcional: Agregar GET para que el archivo no esté "vacío" de métodos
export async function GET() {
  try {
    await dbConnect();
    const reservas = await Reserva.find().populate('bicicletaId');
    return NextResponse.json(reservas);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}