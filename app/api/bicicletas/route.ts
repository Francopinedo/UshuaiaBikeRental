import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Bicicleta from "@/models/Bicicleta";

export async function GET() {
  try {
    await dbConnect();
    const bicicletas = await Bicicleta.find({}).sort({ createdAt: -1 });
    return NextResponse.json(bicicletas || []);
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener datos" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const nuevaBici = await Bicicleta.create({
      ...body,
      stock: Number(body.stock) || 1,
      rodado: Number(body.rodado) || 29
    });
    return NextResponse.json(nuevaBici, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    await dbConnect();
    const { _id, ...data } = await req.json();
    
    // Forzamos que stock y rodado sean números antes de actualizar
    const datosActualizados = {
      ...data,
      stock: Number(data.stock),
      rodado: Number(data.rodado)
    };

    const actualizada = await Bicicleta.findByIdAndUpdate(
      _id,
      datosActualizados,
      { new: true }
    );
    
    if (!actualizada) return NextResponse.json({ error: "No se encontró la bici" }, { status: 404 });
    return NextResponse.json(actualizada);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}