"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  ArrowRight, Zap, Shield, Cpu, Instagram, 
  CheckCircle2, MapPin, Clock, Mountain, 
  ShoppingCart, Trash2, Plus, Minus, Banknote, CreditCard, CheckCircle
} from "lucide-react";

export default function UshuaiaBikeRental() {
  // --- ESTADOS ---
  const [bicicletas, setBicicletas] = useState<any[]>([]);
  const [carrito, setCarrito] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reservaExitosa, setReservaExitosa] = useState(false);
  
  // Estado para el formulario con valores iniciales
  const [formData, setFormData] = useState({ 
    nombre: "", 
    email: "", 
    fechaInicio: "", 
    dias: 1,
    metodoPago: "EFECTIVO" 
  });

  const categorias = ["TODOS", "STANDARD", "PREMIUM", "PRO", "PRO DOBLE"];

  // --- CARGA DE DATOS ---
  useEffect(() => {
    const fetchBicis = async () => {
      try {
        const res = await fetch("/api/bicicletas");
        const data = await res.json();
        setBicicletas(data.map((b: any) => ({ ...b, cantSel: 1 })));
      } catch (error) {
        console.error("Error cargando bicicletas:", error);
      }
    };
    fetchBicis();
  }, []);

  // --- LÓGICA DE CARRITO ---
  const ajustarCantSel = (id: string, op: 'sumar' | 'restar') => {
    setBicicletas(prev => prev.map(b => {
      if (b._id === id) {
        const nueva = op === 'sumar' ? Math.min(b.cantSel + 1, b.stock) : Math.max(1, b.cantSel - 1);
        return { ...b, cantSel: nueva };
      }
      return b;
    }));
  };

  const agregarAlCarrito = (bici: any) => {
    const existe = carrito.find(item => item._id === bici._id);
    if (existe) {
      setCarrito(carrito.map(item => item._id === bici._id ? { ...item, cantidad: bici.cantSel } : item));
    } else {
      setCarrito([...carrito, { ...bici, cantidad: bici.cantSel }]);
    }
    setIsModalOpen(true);
  };

  const calcularTotal = () => {
    const subtotal = carrito.reduce((acc, b) => acc + (Number(b.diario) * b.cantidad), 0);
    return subtotal * formData.dias;
  };

  // --- FUNCIÓN DE CONFIRMACIÓN (CORREGIDA) ---
  const handleFinalizar = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/reservas/multi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: carrito.map(b => ({ bicicletaId: b._id, cantidad: b.cantidad })),
          nombreCliente: formData.nombre, // Aseguramos que se envíe este campo exacto
          email: formData.email,
          fechaInicio: formData.fechaInicio,
          dias: formData.dias,
          metodoPago: formData.metodoPago,
          total: calcularTotal()
        })
      });

      if (res.ok) {
        setReservaExitosa(true);
        setCarrito([]);
      } else {
        const errorData = await res.json();
        alert("Error: " + errorData.error);
      }
    } catch (error) {
      alert("Error de conexión con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-cyan-500/30">
      
      {/* 1. NAVIGATION BAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative w-16 h-16 overflow-hidden rounded-full border-2 border-slate-700 bg-slate-900 group-hover:border-cyan-500 transition-all duration-300">
              <img src="./bikerental-logo.png" alt="Logo" className="w-full h-full object-cover invert" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white leading-none uppercase">USHUAIA</span>
              <span className="text-[11px] font-bold tracking-[0.25em] text-cyan-400 uppercase">Bike Rental</span>
            </div>
          </div>

          <Button onClick={() => setIsModalOpen(true)} className="bg-slate-900 border border-white/10 rounded-full px-6 flex gap-3 shadow-xl">
            <ShoppingCart size={18} className="text-cyan-400" />
            <span className="font-bold">Reserva ({carrito.length})</span>
          </Button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <video src="./ghero5.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/60 via-[#0f172a]/40 to-[#0f172a]"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Vení a pedalear <br/> <span className="text-cyan-400 font-light italic">al fin del mundo</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Alquilá la bicicleta perfecta para tu aventura en los senderos más australes de la Patagonia.
          </p>
        </div>
      </section>

      {/* 3. SERVICIOS */}
      <section className="py-12 -mt-20 relative z-20 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[{ icon: <Zap/>, title: "Rígidas", desc: "Velocidad y agilidad urbana" }, { icon: <Shield/>, title: "Doble Suspensión", desc: "Control total en montaña" }, { icon: <Cpu/>, title: "Salidas Guiadas", desc: "Expertos en cada sendero" }].map((item, i) => (
            <div key={i} className="bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 hover:border-cyan-500/50 transition-all group shadow-2xl">
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CATÁLOGO DINÁMICO */}
      <section id="catalogo" className="py-24 container mx-auto px-6">
        <Tabs defaultValue="TODOS" className="w-full">
          <TabsList className="flex flex-wrap justify-center bg-transparent gap-2 mb-12">
            {categorias.map(cat => (
              <TabsTrigger key={cat} value={cat} className="px-6 py-2 rounded-full border border-slate-800 data-[state=active]:bg-cyan-500">{cat}</TabsTrigger>
            ))}
          </TabsList>

          {categorias.map(cat => (
            <TabsContent key={cat} value={cat} className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {bicicletas
                .filter(b => (cat === "TODOS" || b.categoria === cat) && b.stock > 0)
                .map((bici) => (
                  <div key={bici._id} className="group relative bg-slate-900/20 rounded-[3.5rem] border border-white/5 overflow-hidden transition-all duration-500 hover:bg-slate-900/40 hover:border-cyan-500/30 flex flex-col">
                    <div className="relative aspect-[4/5] overflow-hidden bg-slate-950">
                      <img src={bici.imagenUrl} alt={bici.nombre} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-90" />
                      <div className="absolute top-8 left-8 flex flex-col gap-2">
                        <span className="bg-cyan-500 text-slate-900 text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl w-fit">{bici.categoria}</span>
                        <span className="bg-slate-900/80 backdrop-blur-md text-cyan-400 text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/10 shadow-xl w-fit">Stock: {bici.stock}</span>
                      </div>
                      <div className="absolute bottom-10 left-10 right-10">
                        <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-3">{bici.nombre}</h3>
                        <p className="text-4xl font-light text-cyan-400">${bici.diario} <span className="text-xs text-slate-400 font-bold tracking-widest">/ Día</span></p>
                      </div>
                    </div>

                    <div className="p-10 pt-8 flex-grow flex flex-col">
                      <div className="flex items-center justify-between bg-black/40 p-2 rounded-2xl mb-6 border border-white/5">
                        <button onClick={() => ajustarCantSel(bici._id, 'restar')} className="w-10 h-10 bg-slate-800 rounded-xl hover:bg-cyan-500 hover:text-black transition-colors"> <Minus size={14}/> </button>
                        <span className="font-bold text-lg">{bici.cantSel}</span>
                        <button onClick={() => ajustarCantSel(bici._id, 'sumar')} className="w-10 h-10 bg-slate-800 rounded-xl hover:bg-cyan-500 hover:text-black transition-colors"> <Plus size={14}/> </button>
                      </div>

                      <Button onClick={() => agregarAlCarrito(bici)} className="w-full rounded-full py-6 bg-cyan-500 text-slate-900 font-black uppercase hover:bg-white transition-all">
                        Añadir a Reserva
                      </Button>
                    </div>
                  </div>
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* --- MODAL UNIFICADO --- */}
      <Dialog open={isModalOpen} onOpenChange={(val) => { setIsModalOpen(val); if(!val) setReservaExitosa(false); }}>
        <DialogContent className="bg-slate-950 border-white/10 text-white rounded-[2.5rem] max-w-lg shadow-2xl p-0 overflow-hidden border-none">
          {reservaExitosa ? (
            <div className="p-12 text-center flex flex-col items-center animate-in fade-in zoom-in duration-300">
              <CheckCircle size={80} className="text-cyan-400 mb-6 animate-bounce" />
              <h2 className="text-3xl font-black uppercase tracking-tighter">¡Reserva Lista!</h2>
              <p className="text-slate-400 mt-4 text-sm">Gracias <span className="text-white font-bold">{formData.nombre}</span>, Se ha enviado un mail con su reserva.</p>
              <Button onClick={() => window.location.reload()} className="mt-8 bg-white text-black w-full py-6 rounded-2xl font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors">Entendido</Button>
            </div>
          ) : (
            <div className="p-8">
              <DialogHeader className="mb-6"><DialogTitle className="text-3xl font-black uppercase italic text-cyan-400 tracking-tighter">Mi Reserva</DialogTitle></DialogHeader>
              
              <div className="space-y-3 mb-6 max-h-[180px] overflow-y-auto pr-2 custom-scrollbar">
                {carrito.map(item => (
                  <div key={item._id} className="flex justify-between bg-white/5 p-4 rounded-2xl items-center border border-white/5">
                    <div><p className="font-bold uppercase text-sm">{item.nombre}</p><p className="text-[10px] text-slate-500 uppercase">Cantidad: {item.cantidad}</p></div>
                    <div className="flex items-center gap-4">
                      <p className="font-black text-cyan-400">${item.diario * item.cantidad}</p>
                      <button onClick={() => setCarrito(carrito.filter(c => c._id !== item._id))} className="text-red-500 p-2 hover:bg-red-500/10 rounded-full transition-colors"><Trash2 size={16}/></button>
                    </div>
                  </div>
                ))}
              </div>

              {carrito.length > 0 && (
                <form onSubmit={handleFinalizar} className="space-y-4 border-t border-white/5 pt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <input required placeholder="Nombre" className="bg-slate-900 border border-white/5 p-4 rounded-2xl outline-none focus:ring-1 ring-cyan-500 text-sm" value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} />
                    <input required type="email" placeholder="Email" className="bg-slate-900 border border-white/5 p-4 rounded-2xl outline-none focus:ring-1 ring-cyan-500 text-sm" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-500 font-bold ml-2 uppercase">Fecha Inicio</label>
                      <input required type="date" className="w-full bg-slate-900 border border-white/5 p-4 rounded-2xl text-xs uppercase" onChange={e => setFormData({...formData, fechaInicio: e.target.value})} />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-500 font-bold ml-2 uppercase">Días</label>
                      <input required type="number" min="1" className="w-full bg-slate-900 border border-white/5 p-4 rounded-2xl text-sm font-bold" value={formData.dias} onChange={e => setFormData({...formData, dias: parseInt(e.target.value) || 1})} />
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <label className="text-[10px] text-slate-500 font-bold ml-2 tracking-widest uppercase">Método de Pago</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button type="button" onClick={() => setFormData({...formData, metodoPago: 'EFECTIVO'})} className={`p-4 rounded-2xl border flex flex-col items-center gap-2 transition-all ${formData.metodoPago === 'EFECTIVO' ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400' : 'bg-slate-900 border-white/5 text-slate-500'}`}>
                        <Banknote size={20}/> <span className="text-[10px] font-bold uppercase">Efectivo</span>
                      </button>
                      <button type="button" onClick={() => setFormData({...formData, metodoPago: 'TARJETA'})} className={`p-4 rounded-2xl border flex flex-col items-center gap-2 transition-all ${formData.metodoPago === 'TARJETA' ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400' : 'bg-slate-900 border-white/5 text-slate-500'}`}>
                        <CreditCard size={20}/> <span className="text-[10px] font-bold uppercase">Tarjeta</span>
                      </button>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 mt-4 flex justify-between items-center">
                    <div>
                      <span className="text-slate-500 font-bold uppercase text-[10px] block">Total ({formData.dias} días)</span>
                      <span className="text-3xl font-black text-cyan-400 tracking-tighter">${calcularTotal()}</span>
                    </div>
                    <Button disabled={loading} type="submit" className="bg-cyan-500 px-10 py-8 rounded-3xl text-black font-black uppercase text-sm shadow-xl shadow-cyan-500/20 hover:bg-white transition-all">
                      {loading ? "Confirmando..." : "Confirmar"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* 5. RUTAS & 6. CONTACTO (Originales mantenidas) */}
      <section id="rutas" className="py-24 bg-slate-950/40">
        <div className="container mx-auto px-6">
           <h2 className="text-4xl font-bold text-white mb-8">Ushuaia en Dos Ruedas</h2>
           <div className="grid md:grid-cols-3 gap-8">
              {[{ title: "Glaciar Martial", tag: "Hard", img: "https://images.unsplash.com/photo-1628172836284-ae2b800c14b3" }, { title: "Playa Larga", tag: "Easy", img: "https://images.unsplash.com/photo-1594916894038-f9b3b5c3d4e7" }, { title: "Bahía Lapataia", tag: "Medium", img: "https://images.unsplash.com/photo-1551694901-766b1a3e6e22" }].map((ruta, i) => (
                <div key={i} className="group relative rounded-[2.5rem] overflow-hidden aspect-[3/4] border border-slate-800 shadow-2xl">
                  <img src={ruta.img} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-all duration-1000" />
                  <div className="absolute bottom-0 p-10 w-full">
                    <span className="text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] border border-white/10 bg-slate-900/50 text-cyan-400">{ruta.tag}</span>
                    <h4 className="text-3xl font-bold text-white mt-4 leading-tight">{ruta.title}</h4>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      <footer id="contacto" className="py-24 border-t border-slate-900 bg-[#080d1a] text-center">
        <div className="container mx-auto px-6">
          <p className="text-slate-500 text-xs uppercase tracking-widest">© 2026 Ushuaia Bike Rental</p>
        </div>
      </footer>
    </div>
  );
}