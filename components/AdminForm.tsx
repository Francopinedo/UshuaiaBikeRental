"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Bike, Trash2, PlusCircle, RefreshCw, Image as ImageIcon,Pencil } from "lucide-react";

export default function AdminForm({ userName }: { userName: string }) {
  const [loading, setLoading] = useState(false);
  const [bicicletas, setBicicletas] = useState([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({
    nombre: "",
    categoria: "STANDARD",
    diario: "",
    medio: "",
    talles: "",
    rodado: 29,
    transmision: "",
    horquilla: "",
    uso: "",
    imagenUrl: "",
    stock: 1,
    disponible: true
  });

  useEffect(() => { fetchBicicletas(); }, []);

  const fetchBicicletas = async () => {
    const res = await fetch("/api/bicicletas");
    const data = await res.json();
    setBicicletas(data);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setForm({ ...form, imagenUrl: reader.result as string });
      reader.readAsDataURL(file);
    }
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("/api/bicicletas", {
      method: editingId ? "PUT" : "POST", // Verifica que esto sea PUT
      headers: { "Content-Type": "application/json" },
      // IMPORTANTE: El backend espera '_id' para buscar la bici
      body: JSON.stringify(editingId ? { ...form, _id: editingId } : form),
    });

    if (res.ok) {
      const data = await res.json();
      console.log("Respuesta del servidor:", data);
      
      fetchBicicletas(); // Refrescar la lista
      alert(editingId ? "¡Actualizado con éxito!" : "¡Agregado!");
      
      // Limpiar todo
      setEditingId(null);
      setForm({
        nombre: "", categoria: "STANDARD", diario: "", medio: "",
        talles: "", rodado: 29, transmision: "", horquilla: "",
        uso: "", stock: 1, imagenUrl: "", disponible: true
      });
    } else {
      const errorData = await res.json();
      alert("Error: " + errorData.error);
    }
  } catch (err) {
    console.error("Error en la petición:", err);
  } finally {
    setLoading(false);
  }
};

  const deleteBici = async (id: string) => {
    if (!confirm("¿Eliminar bicicleta?")) return;
    await fetch(`/api/bicicletas/${id}`, { method: "DELETE" });
    fetchBicicletas();
  };

  const handleEdit = (b: any) => {
  setEditingId(b._id);
  setForm({
    nombre: b.nombre,
    categoria: b.categoria,
    diario: b.diario,
    medio: b.medio,
    talles: b.talles,
    rodado: b.rodado,
    transmision: b.transmision,
    horquilla: b.horquilla,
    uso: b.uso || "",
    imagenUrl: b.imagenUrl,
    stock: b.stock,
    disponible: b.disponible
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
};
  return (
  <div className="min-h-screen bg-[#020617] text-slate-200 p-6 md:p-12">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
      
      {/* COLUMNA 1: FORMULARIO (DINÁMICO PARA ALTA/EDICIÓN) */}
      <div className="bg-slate-900/50 border border-white/5 p-8 rounded-[2.5rem] h-fit shadow-2xl">
        <h2 className="text-xl mb-4 text-slate-400">Bienvenido, {userName}</h2>
        
        <div className="flex items-center gap-3 mb-8">
          {/* Cambiamos el icono y título según si estamos editando */}
          {editingId ? <Pencil className="text-amber-500" /> : <PlusCircle className="text-cyan-500" />}
          <h1 className="text-2xl font-black text-white uppercase tracking-tighter">
            {editingId ? "Editar Unidad" : "Nueva Unidad"}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* SUBIDA DE IMAGEN */}
          <div className="relative border-2 border-dashed border-white/10 rounded-2xl p-4 bg-slate-950/50">
            <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
            <div className="flex flex-col items-center gap-2">
              {form.imagenUrl ? <img src={form.imagenUrl} className="h-32 object-contain" alt="Preview" /> : <><ImageIcon size={32}/><span className="text-xs text-slate-500 uppercase font-bold tracking-widest">Subir Foto</span></>}
            </div>
          </div>

          <input required className="w-full bg-slate-950 border border-white/10 rounded-xl px-5 py-3 focus:ring-1 focus:ring-cyan-500 outline-none" placeholder="Nombre" value={form.nombre} onChange={e => setForm({...form, nombre: e.target.value})} />
          
          <div className="grid grid-cols-2 gap-4">
            <select className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 outline-none" value={form.categoria} onChange={e => setForm({...form, categoria: e.target.value})}>
              <option value="STANDARD">Standard</option>
              <option value="PREMIUM">Premium</option>
              <option value="PRO">Pro</option>
              <option value="PRO DOBLE">Pro Doble</option>
            </select>
            <input placeholder="Talles" className="bg-slate-950 border border-white/10 rounded-xl px-5 py-3 outline-none" value={form.talles} onChange={e => setForm({...form, talles: e.target.value})} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input placeholder="Precio Día" className="bg-slate-950 border border-white/10 rounded-xl px-5 py-3 outline-none" value={form.diario} onChange={e => setForm({...form, diario: e.target.value})} />
            <input placeholder="Precio 5hs" className="bg-slate-950 border border-white/10 rounded-xl px-5 py-3 outline-none" value={form.medio} onChange={e => setForm({...form, medio: e.target.value})} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-slate-500 ml-2">Stock Total</label>
              <input type="number" min="1" className="w-full bg-slate-950 border border-white/10 rounded-xl px-5 py-3 outline-none focus:ring-1 focus:ring-cyan-500" value={form.stock} onChange={e => setForm({...form, stock: parseInt(e.target.value) || 0})} />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-slate-500 ml-2">Rodado</label>
              <input type="number" className="w-full bg-slate-950 border border-white/10 rounded-xl px-5 py-3 outline-none focus:ring-1 focus:ring-cyan-500" value={form.rodado} onChange={e => setForm({...form, rodado: parseInt(e.target.value) || 0})} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input placeholder="Transmisión" className="bg-slate-950 border border-white/10 rounded-xl px-5 py-3 outline-none" value={form.transmision} onChange={e => setForm({...form, transmision: e.target.value})} />
            <input placeholder="Horquilla" className="bg-slate-950 border border-white/10 rounded-xl px-5 py-3 outline-none" value={form.horquilla} onChange={e => setForm({...form, horquilla: e.target.value})} />
          </div>

          {/* BOTÓN DINÁMICO */}
          <div className="pt-4 space-y-3">
            <Button 
              disabled={loading} 
              className={`w-full py-7 font-black uppercase tracking-widest transition-all shadow-lg ${editingId ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-amber-500/20' : 'bg-cyan-500 hover:bg-cyan-600 text-slate-950 shadow-cyan-500/20'}`}
            >
              {loading ? "Procesando..." : editingId ? "Actualizar Unidad" : "Guardar en Flota"}
            </Button>

            {editingId && (
              <button 
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setForm({ nombre: "", categoria: "STANDARD", diario: "", medio: "", talles: "", rodado: 29, transmision: "", horquilla: "", uso: "", stock: 1, imagenUrl: "", disponible: true });
                }}
                className="w-full text-slate-500 hover:text-white text-[10px] uppercase font-black tracking-widest transition-colors"
              >
                Cancelar Edición
              </button>
            )}
          </div>
        </form>
      </div>

      {/* COLUMNA 2: LISTADO */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center gap-2 italic">
            <Bike className="text-cyan-500" /> Flota Actual ({bicicletas.length})
          </h2>
          <button onClick={fetchBicicletas} className="hover:rotate-180 transition-transform duration-500">
            <RefreshCw size={18} className="text-slate-500" />
          </button>
        </div>

        <div className="grid gap-3 overflow-y-auto max-h-[700px] pr-2 custom-scrollbar">
          {bicicletas.map((b: any) => (
            <div key={b._id} className={`bg-slate-900/80 border p-4 rounded-2xl flex items-center gap-4 group transition-all ${editingId === b._id ? 'border-amber-500 shadow-lg shadow-amber-500/10' : 'border-white/5 hover:border-cyan-500/30'}`}>
              <div className="w-16 h-12 bg-slate-950 rounded-lg overflow-hidden flex-shrink-0">
                {b.imagenUrl ? <img src={b.imagenUrl} className="object-cover w-full h-full" alt={b.nombre} /> : <div className="w-full h-full flex items-center justify-center text-[8px] text-slate-700 font-bold">SIN FOTO</div>}
              </div>

              <div className="flex-grow">
                <h3 className="font-bold text-white text-sm leading-tight">{b.nombre}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] uppercase text-cyan-500 font-black tracking-widest">{b.categoria}</span>
                  <span className="text-slate-700">|</span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${b.stock > 0 ? 'text-slate-400' : 'text-red-500'}`}>Stock: {b.stock || 0}</span>
                </div>
              </div>

              {/* BOTONES DE ACCIÓN */}
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => handleEdit(b)} className="p-2 text-cyan-500 hover:bg-cyan-500/10 rounded-lg transition-colors">
                  <Pencil size={18} />
                </button>
                <button onClick={() => deleteBici(b._id)} className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

}