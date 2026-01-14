"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Bike } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6">
      <div className="bg-slate-900 border border-white/10 p-12 rounded-[2.5rem] shadow-2xl text-center max-w-sm w-full">
        <div className="bg-cyan-500/10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Bike className="text-cyan-500" size={40} />
        </div>
        <h1 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">
          Ushuaia Bike Rental
        </h1>
        <p className="text-slate-400 text-sm mb-8">Acceso exclusivo para administración</p>
        
        <Button 
          onClick={() => signIn("google", { callbackUrl: "/acceso-privado-bikerental" })}
          className="w-full bg-white hover:bg-slate-200 text-black font-bold py-6 rounded-xl flex gap-3"
        >
          <img src="https://authjs.dev/img/providers/google.svg" className="w-5" alt="Google" />
          Entrar con Google
        </Button>
      </div>
    </div>
  );
}