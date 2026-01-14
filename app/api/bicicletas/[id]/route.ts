import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Bicicleta from "@/models/Bicicleta";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const { id } = params;
    await Bicicleta.findByIdAndDelete(id);
    return NextResponse.json({ message: "Eliminada" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error al eliminar" }, { status: 500 });
  }
}

