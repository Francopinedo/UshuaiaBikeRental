import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Reserva from "@/models/Reserva";
import Bicicleta from "@/models/Bicicleta";
import { Resend } from 'resend';

// Inicializamos Resend con tu API KEY de las variables de entorno
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const { items, nombreCliente, email, fechaInicio, dias, metodoPago, total } = body;

    // 1. Cálculos de fecha
    const inicio = new Date(fechaInicio);
    const fin = new Date(inicio);
    fin.setDate(inicio.getDate() + Number(dias));

    const reservasCreadas = [];
    const listaBicisMail = []; // Para el cuerpo del correo

    // 2. Procesamos y validamos stock de cada item
    for (const item of items) {
      const { bicicletaId, cantidad } = item;
      const bici = await Bicicleta.findById(bicicletaId);
      
      if (!bici || bici.stock < cantidad) {
        return NextResponse.json(
          { error: `Stock insuficiente para: ${bici?.nombre || 'Bicicleta desconocida'}` },
          { status: 400 }
        );
      }

      // 3. Crear el registro en la base de datos
      const nuevaReserva = await Reserva.create({
        bicicletaId,
        cantidad,
        nombreCliente,
        email,
        fechaInicio: inicio,
        fechaFin: fin,
        metodoPago,
        total,
        estado: 'ACTIVA'
      });

      // 4. Descontar Stock
      await Bicicleta.findByIdAndUpdate(bicicletaId, { 
        $inc: { stock: -Math.abs(cantidad) } 
      });

      reservasCreadas.push(nuevaReserva);
      listaBicisMail.push(`${cantidad}x ${bici.nombre}`);
    }

    // 5. ENVÍO DE EMAIL AUTOMÁTICO
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'Ushuaia Bike Rental <onboarding@resend.dev>', // Cambia esto cuando valides tu dominio
          to: email,
          subject: `🚲 Reserva Confirmada - ${nombreCliente}`,
          html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; background-color: #0f172a; color: #f8fafc; padding: 40px; border-radius: 20px;">
              <h1 style="color: #22d3ee; text-transform: uppercase; letter-spacing: -1px;">¡Tu aventura comienza!</h1>
              <p style="font-size: 16px; color: #94a3b8;">Hola <strong>${nombreCliente}</strong>, tu reserva en Ushuaia Bike Rental ha sido confirmada con éxito.</p>
              
              <div style="background-color: #1e293b; padding: 20px; border-radius: 15px; margin: 20px 0; border: 1px solid #334155;">
                <h3 style="margin-top: 0; color: #22d3ee; font-size: 12px; text-transform: uppercase;">Resumen del equipo:</h3>
                <ul style="list-style: none; padding: 0; margin: 0; font-size: 18px;">
                  ${listaBicisMail.map(linea => `<li style="margin-bottom: 5px;">• ${linea}</li>`).join('')}
                </ul>
              </div>

              <table style="width: 100%; border-collapse: collapse; color: #94a3b8; font-size: 14px;">
                <tr>
                  <td style="padding: 10px 0;"><strong>Fecha de Retiro:</strong></td>
                  <td style="text-align: right; color: #f8fafc;">${inicio.toLocaleDateString('es-AR')}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0;"><strong>Días de alquiler:</strong></td>
                  <td style="text-align: right; color: #f8fafc;">${dias} día(s)</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0;"><strong>Método de pago:</strong></td>
                  <td style="text-align: right; color: #f8fafc;">${metodoPago}</td>
                </tr>
                <tr style="font-size: 20px;">
                  <td style="padding: 20px 0; border-top: 1px solid #334155;"><strong>TOTAL:</strong></td>
                  <td style="padding: 20px 0; border-top: 1px solid #334155; text-align: right; color: #22d3ee; font-weight: 900;">$${total}</td>
                </tr>
              </table>

              <p style="text-align: center; margin-top: 30px; font-size: 12px; color: #64748b;">
                Ushuaia, Tierra del Fuego, Argentina.<br/>
                Presenta este mail al momento del retiro.
              </p>
            </div>
          `
        });
      } catch (mailError) {
        console.error("Error al enviar el correo:", mailError);
        // No devolvemos error 500 para que el usuario vea su reserva confirmada aunque el mail falle
      }
      console.log("Intentando enviar mail a:", email);
console.log("Usando API KEY:", process.env.RESEND_API_KEY?.substring(0, 5) + "...");

try {
  const data = await resend.emails.send({
    from: 'Ushuaia Bike Rental <onboarding@resend.dev>',
    to: email, // <--- RECUERDA: Solo funcionará si pones TU mail aquí
    subject: `🚲 Reserva Confirmada - ${nombreCliente}`,
    html: `...` 
  });
  console.log("Respuesta de Resend:", data);
} catch (error) {
  console.error("Fallo el envío:", error);
}
    }

    return NextResponse.json({ 
      message: "Reserva procesada y mail enviado", 
      reservas: reservasCreadas 
    }, { status: 201 });

  } catch (error: any) {
    console.error("Error en Reserva Multi:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}