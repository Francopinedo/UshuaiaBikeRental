import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Reserva from "@/models/Reserva";
import Bicicleta from "@/models/Bicicleta";

export async function GET() {
  try {
    await dbConnect();
    const hoy = new Date();

    // Buscar reservas expiradas que aún están ACTIVAS
    const expiradas = await Reserva.find({ 
      fechaFin: { $lt: hoy }, 
      estado: 'ACTIVA' 
    });

    for (const res of expiradas) {
      // 1. Devolver stock (cantidad reservada en su momento)
      await Bicicleta.findByIdAndUpdate(res.bicicletaId, { 
        $inc: { stock: res.cantidad || 1 } 
      });

      // 2. Finalizar reserva
      res.estado = 'FINALIZADA';
      await res.save();
    }

    return NextResponse.json({ 
      message: `Stock devuelto de ${expiradas.length} reservas.` 
    }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}