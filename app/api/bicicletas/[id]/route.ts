import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Bicicleta from "@/models/Bicicleta";

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> } // 1. Cambiamos el tipo a Promise
) {
  try {
    await dbConnect();
    
    // 2. Usamos await para obtener los params
    const { id } = await context.params; 
    
    const biciEliminada = await Bicicleta.findByIdAndDelete(id);

    if (!biciEliminada) {
      return NextResponse.json({ error: "Bicicleta no encontrada" }, { status: 404 });
    }

    return NextResponse.json({ message: "Eliminada correctamente" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error al eliminar" }, { status: 500 });
  }
}