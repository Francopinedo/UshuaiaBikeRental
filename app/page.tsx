import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Cpu, Users, Globe, TrendingUp } from "lucide-react"

export default function AutonoPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-12">
              <div className="text-2xl font-bold tracking-wider text-white">Ushuaia Bike Rental</div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#tecnologia" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Nosotros
                </a>
                <a href="#acerca" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Catalogo
                </a>
                <a href="#carreras" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Contacto
                </a>
              </div>
            </div>
            <Button className="bg-white text-slate-900 hover:bg-slate-100">Reservar Ahora</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
  src="./ghero5.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover"
></video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wider text-white mb-6 text-balance">
            Veni a pedalear 
            <br />
            <span className="font-normal">al fin del mundo</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto text-pretty">
            Renta la bicicleta perfecta para tu aventura 
          </p>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tecnologia" className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wide">🏔️ Nuestros Servicios</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Ofrecemos bicicletas de alta calidad para que explores la ciudad y la naturaleza con total confianza.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-colors group">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Bicicletas Rigidas</h3>
              <p className="text-slate-400 leading-relaxed">
               Ideales para la ciudad y rutas suaves. Disfruta de un manejo ágil y eficiente con nuestras bicicletas rígidas de alta gama, perfectas para recorridos tranquilos y exploraciones sencillas..
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-colors group">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Bicicletas Doble Suspension</h3>
              <p className="text-slate-400 leading-relaxed">
                Perfectas para la montaña y senderos difíciles. Mayor control y comodidad en terrenos irregulares. Diseñadas para absorber impactos y que puedas explorar la cordillera con confianza.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-colors group">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <Cpu className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Salidas Guiadas</h3>
              <p className="text-slate-400 leading-relaxed">
                Nuestros guías expertos te muestran lo mejor de nuestra tierra y aseguran una experiencia inolvidable en cada recorrido.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://replicate.delivery/xezq/INfxPcOfQ4rMN0hKFvGh5pMqSjOO18qGOaDfQhd1sMg31TirA/tmpw_an3thh.jpeg"
                alt="Advanced sensor array and LIDAR system on autonomous vehicle with blue glow effects"
                className="rounded-lg shadow-2xl"
              />
            </div>
            {/* <div>
              <h3 className="text-3xl font-light text-white mb-6">Sensores de Precisión Extrema</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Nuestro sistema utiliza LIDAR, radar y cámaras de alta definición para crear un mapa 360° del entorno en
                tiempo real.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">Detección de objetos hasta 300 metros</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">Visión nocturna avanzada</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">Procesamiento en tiempo real</span>
                </li>
              </ul>
            </div> */}
          </div>


        </div>
      </section>



{/* Pricing Section */}
<section id="precios" className="py-24 bg-slate-900">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-light text-white text-center mb-16">Tarifas de Alquiler</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {/* Ejemplo de tarjeta de precio */}
      <div className="bg-slate-950 p-8 rounded-xl border border-slate-800 text-center hover:border-cyan-500 transition-all">
        <h3 className="text-white text-xl mb-4">Urbana / Rígida</h3>
        <div className="text-4xl font-bold text-white mb-6">$15.000 <span className="text-sm font-light text-slate-400">/ día</span></div>
        <ul className="text-slate-400 space-y-3 mb-8 text-sm">
          <li>Casco incluido</li>
          <li>Kit de reparación</li>
          <li>Candado de seguridad</li>
        </ul>
        <Button className="w-full bg-cyan-500 hover:bg-cyan-600">Alquilar</Button>
      </div>
      {/* Repetir para MTB y Doble... */}
    </div>
  </div>
</section>


{/* CATALOGO Section */}
<section id="catalogo" className="py-24 bg-slate-950">
  <div className="container mx-auto px-4 md:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wide">Nuestra Flota</h2>
      <p className="text-slate-400 text-lg max-w-2xl mx-auto">
        Equipamiento profesional mantenido a diario para tu seguridad en los senderos de Tierra del Fuego.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
      
      {/* CARD 1 - VOLTA RAZZ (CON VIDEO) */}
      <div className="group bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all">
        <div className="aspect-video relative overflow-hidden">
          <video
            src="./volta1.mp4"
            autoPlay muted loop playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-cyan-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
            Urbana / Recreativa
          </div>
        </div>
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-white">VOLTA RAZZ</h3>
              <p className="text-slate-400 text-sm mt-1">Ideal para recorridos costeros y ciudad</p>
            </div>
            <div className="text-right">
              <span className="text-cyan-400 font-bold text-xl">$15.000</span>
              <p className="text-slate-500 text-xs">por día</p>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-2 mb-6">
            <li className="flex items-center text-slate-300 text-sm">
              <ArrowRight className="w-4 h-4 text-cyan-500 mr-2" /> Talles S a XL
            </li>
            <li className="flex items-center text-slate-300 text-sm">
              <ArrowRight className="w-4 h-4 text-cyan-500 mr-2" /> 2x11 Velocidades
            </li>
            <li className="flex items-center text-slate-300 text-sm">
              <ArrowRight className="w-4 h-4 text-cyan-500 mr-2" /> Frenos Hidráulicos
            </li>
          </ul>
          <Button className="w-full bg-white text-slate-900 hover:bg-cyan-500 hover:text-white transition-colors">
            Reservar Volta Razz
          </Button>
        </div>
      </div>

      {/* CARD 2 - SP CHISEL COMP (ALTO RENDIMIENTO) */}
      <div className="group bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all">
        <div className="aspect-video relative overflow-hidden">
          <img
            src="./sp-chisel-comp.png"
            alt="SP CHISEL COMP"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
            Mountain Bike Premium
          </div>
        </div>
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-white">SP CHISEL COMP</h3>
              <p className="text-slate-400 text-sm mt-1">Máximo rendimiento en senderos técnicos</p>
            </div>
            <div className="text-right">
              <span className="text-cyan-400 font-bold text-xl">$25.000</span>
              <p className="text-slate-500 text-xs">por día</p>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-2 mb-6">
            <li className="flex items-center text-slate-300 text-sm">
              <ArrowRight className="w-4 h-4 text-cyan-500 mr-2" /> Cuadro Smartweld
            </li>
            <li className="flex items-center text-slate-300 text-sm">
              <ArrowRight className="w-4 h-4 text-cyan-500 mr-2" /> SRAM Eagle 1x12
            </li>
            <li className="flex items-center text-slate-300 text-sm">
              <ArrowRight className="w-4 h-4 text-cyan-500 mr-2" /> RockShox Judy
            </li>
          </ul>
          <Button className="w-full bg-white text-slate-900 hover:bg-cyan-500 hover:text-white transition-colors">
            Reservar Chisel Comp
          </Button>
        </div>
      </div>

    </div>
  </div>
</section>

{/* Rutas Recomendadas Section */}
<section id="rutas" className="py-24 bg-slate-900">
  <div className="container mx-auto px-4 md:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wide">🗺️ Rutas Recomendadas</h2>
      <p className="text-slate-400 text-lg max-w-2xl mx-auto">
        Explora la belleza de Ushuaia con nuestras rutas seleccionadas. Cada alquiler incluye un mapa digital.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Ruta 1: Glaciar Martial */}
      <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all group">
        <div className="aspect-video relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1628172836284-ae2b800c14b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Glaciar Martial Trail"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
            Avanzada
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">Ascenso al Glaciar Martial</h3>
          <p className="text-slate-400 text-sm mb-4">
            Un clásico con vistas panorámicas de la ciudad y el Canal Beagle. Desafío para piernas experimentadas.
          </p>
          <ul className="text-slate-300 text-sm space-y-1 mb-5">
            <li className="flex items-center"><ArrowRight className="w-4 h-4 text-cyan-500 mr-2" /> Distancia: 6 km (ida y vuelta)</li>
            <li className="flex items-center"><ArrowRight className="w-4 h-4 text-cyan-500 mr-2" /> Duración: 3-4 horas</li>
            <li className="flex items-center"><ArrowRight className="w-4 h-4 text-cyan-500 mr-2" /> Dificultad: Alta</li>
          </ul>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Glaciar+Martial,+Ushuaia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
          >
            Ver en Google Maps <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Ruta 2: Sendero de la Costa (Parque Nacional) */}
      <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all group">
        <div className="aspect-video relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1594916894038-f9b3b5c3d4e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Sendero de la Costa, Parque Nacional Tierra del Fuego"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
            Intermedia
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">Sendero de la Costa (PN)</h3>
          <p className="text-slate-400 text-sm mb-4">
            Recorre la orilla del Canal Beagle dentro del Parque Nacional. Vistas impresionantes y contacto con la naturaleza.
          </p>
          <ul className="text-slate-300 text-sm space-y-1 mb-5">
            <li className="flex items-center"><ArrowRight className="w-4 h-4 text-cyan-500 mr-2" /> Distancia: 8 km (solo ida)</li>
            <li className="flex items-center"><ArrowRight className="w-4 h-4 text-cyan-500 mr-2" /> Duración: 2-3 horas</li>
            <li className="flex items-center"><ArrowRight className="w-4 h-4 text-cyan-500 mr-2" /> Dificultad: Moderada</li>
          </ul>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Sendero+de+la+Costa,+Parque+Nacional+Tierra+del+Fuego"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
          >
            Ver en Google Maps <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Ruta 3: Casco Urbano y Costanera */}
      <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all group">
        <div className="aspect-video relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551694901-766b1a3e6e22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Ushuaia City Tour Bike"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
            Fácil
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">Recorrido Urbano y Costanera</h3>
          <p className="text-slate-400 text-sm mb-4">
            Paseo relajado por los puntos emblemáticos de la ciudad y la hermosa costanera de Ushuaia.
          </p>
          <ul className="text-slate-300 text-sm space-y-1 mb-5">
            <li className="flex items-center"><ArrowRight className="w-4 h-4 text-cyan-500 mr-2" /> Distancia: 10-15 km</li>
            <li className="flex items-center"><ArrowRight className="w-4 h-4 text-cyan-500 mr-2" /> Duración: 1-2 horas</li>
            <li className="flex items-center"><ArrowRight className="w-4 h-4 text-cyan-500 mr-2" /> Dificultad: Baja</li>
          </ul>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Ushuaia+Costanera"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
          >
            Ver en Google Maps <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* CATALOGO Section aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/}
      <section id="acerca" className="py-24 bg-slate-950">
         <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wide">Catalogo</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">...</p>
          </div>
        </div>
       </section>  
       
     <section id="acerca" className="py-24 bg-slate-950"> 
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

    
    <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-right animate-once">
      <div>
        {/* <img
          src="./a.jpg"
          alt="VOLTA RAZZ"
          className="rounded-lg shadow-2xl mix-blend-lighten"
        /> */}
         <video
  src="./volta1.mp4"
  autoPlay
  muted
  playsInline
  className="w-full h-full object-cover rounded-lg"
></video>
      </div>

      <div>
        <h3 className="text-3xl font-light text-white mb-6">VOLTA RAZZ</h3>
        <p className="text-slate-400 text-lg leading-relaxed mb-6">
          Bicicleta rígida ideal para uso urbano y paseos recreativos. Cómoda, confiable y perfecta para quienes recién empiezan.
        </p>

        <ul className="space-y-4">
          <li className="flex items-start">
            <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
            <span className="text-slate-300">Talles disponibles: S, M, L, XL</span>
          </li>

          <li className="flex items-start">
            <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
            <span className="text-slate-300">Ruedas 29 con horquilla Zoom Vaxa525</span>
          </li>

          <li className="flex items-start">
            <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
            <span className="text-slate-300">Transmisión Quest/Microshift 2×11</span>
          </li>

          <li className="flex items-start">
            <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
            <span className="text-slate-300">Frenos hidráulicos Shimano</span>
          </li>
        </ul>
      </div>
    </div>

    
    <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-left animate-once">
      <div className="md:order-2">
        <img
          src="./sp.jpg"
          alt="SP ROCKHOPPER"
          className="rounded-lg shadow-2xl"
        />
      </div>

      <div className="md:order-1">
        <h3 className="text-3xl font-light text-white mb-6">SP ROCKHOPPER</h3>
        <p className="text-slate-400 text-lg leading-relaxed mb-6">
          Un clásico del MTB. Robusta y confiable para ciudad, senderos y uso exigente.
        </p>

        <ul className="space-y-4">
          <li className="flex items-start">
            <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
            <span className="text-slate-300">Talles: M, L, XXL</span>
          </li>

          <li className="flex items-start">
            <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
            <span className="text-slate-300">Ruedas 29 — Horquilla SR Suntour XCM con bloqueo</span>
          </li>

          <li className="flex items-start">
            <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
            <span className="text-slate-300">Transmisión SRAM SX Eagle 1×12</span>
          </li>

          <li className="flex items-start">
            <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
            <span className="text-slate-300">Frenos hidráulicos Shimano MT200</span>
          </li>
        </ul>
      </div>
    </div>

    
    <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-right animate-once">
      <div>
        <img
          src="./sp-chisel-comp.png"
          alt="SP CHISEL COMP"
          className="rounded-lg shadow-2xl"
        />
      </div>

      <div>
        <h3 className="text-3xl font-light text-white mb-6">SP CHISEL COMP</h3>
        <p className="text-slate-400 text-lg leading-relaxed mb-6">
          Una XC de alto rendimiento. Ágil, rápida y diseñada para competir en circuitos técnicos.
        </p>

        <ul className="space-y-4">
          <li className="flex items-start">
            <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
            <span className="text-slate-300">Talles: S, M, L</span>
          </li>

          <li className="flex items-start">
            <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
            <span className="text-slate-300">Cuadro Smartweld DSW de aluminio premium</span>
          </li>

          <li className="flex items-start">
            <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
            <span className="text-slate-300">Transmisión SRAM SX Eagle 1×12</span>
          </li>

          <li className="flex items-start">
            <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
            <span className="text-slate-300">Horquilla RockShox Judy Gold 29</span>
          </li>
        </ul>
      </div>
    </div>

   
    <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-left animate-once">
      <div className="md:order-2">
        <img
          src="./gianttalon.png"
          alt="GIANT TALON"
          className="rounded-lg shadow-2xl"
        />
      </div>

      <div className="md:order-1">
        <h3 className="text-3xl font-light text-white mb-6">GIANT TALON</h3>
        <p className="text-slate-400 text-lg leading-relaxed mb-6">
          Una MTB versátil y ligera, ideal para senderos suaves y uso urbano.
        </p>

        <ul className="space-y-4">
          <li className="flex items-start">
            <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
            <span className="text-slate-300">Talle: S</span>
          </li>

          <li className="flex items-start">
            <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
            <span className="text-slate-300">Ruedas 29 — Horquilla SR Suntour XCM con bloqueo</span>
          </li>

          <li className="flex items-start">
            <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
            <span className="text-slate-300">Transmisión Shimano Deore 2×9</span>
          </li>

          <li className="flex items-start">
            <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
            <span className="text-slate-300">Frenos hidráulicos Tektro</span>
          </li>
        </ul>
      </div>
    </div>

  </div>
</section>   



      {/* About Section */}
      {/* <section id="acerca" className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">Nuestra Misión</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                En Autono, estamos comprometidos con transformar el futuro del transporte mediante la innovación y la
                tecnología sostenible.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                Creemos en un mundo donde la movilidad sea segura, eficiente y accesible para todos, reduciendo el
                impacto ambiental y mejorando la calidad de vida urbana.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://replicate.delivery/xezq/lrcvYs4OmtJVF1ScDcLJ32sktvrZvxhT2CUzqO5nHk8uek4KA/tmpoad_nqe4.jpeg"
                alt="Modern sustainable urban transportation hub with electric vehicles and green architecture"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div> */}

          {/* <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">500+</h3>
              <p className="text-slate-400">Expertos en IA</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">25+</h3>
              <p className="text-slate-400">Países</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">10M+</h3>
              <p className="text-slate-400">Kilómetros Autónomos</p>
            </div>
          </div> */}
        {/* </div>
      </section> */}

      {/* Careers Section */}
      {/* <section id="carreras" className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">Únete a Nuestro Equipo</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              Estamos buscando mentes brillantes que quieran ayudar a dar forma al futuro del transporte. Únete a
              nosotros en esta revolución de la movilidad.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 text-left hover:border-cyan-500/50 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Ingeniero de IA Senior</h3>
                <p className="text-cyan-400 mb-4">San Francisco, CA</p>
                <p className="text-slate-400 mb-4">
                  Desarrolla algoritmos de aprendizaje automático para sistemas de conducción autónoma.
                </p>
                <Button variant="outline" className="text-cyan-400 border-cyan-400 hover:bg-cyan-400/10 bg-transparent">
                  Ver detalles
                </Button>
              </div>

              <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 text-left hover:border-cyan-500/50 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Ingeniero de Sistemas</h3>
                <p className="text-cyan-400 mb-4">Austin, TX</p>
                <p className="text-slate-400 mb-4">
                  Diseña e implementa arquitecturas de sistemas para vehículos autónomos.
                </p>
                <Button variant="outline" className="text-cyan-400 border-cyan-400 hover:bg-cyan-400/10 bg-transparent">
                  Ver detalles
                </Button>
              </div>

              <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 text-left hover:border-cyan-500/50 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Diseñador UX/UI</h3>
                <p className="text-cyan-400 mb-4">Remoto</p>
                <p className="text-slate-400 mb-4">
                  Crea interfaces intuitivas para la experiencia del usuario en vehículos autónomos.
                </p>
                <Button variant="outline" className="text-cyan-400 border-cyan-400 hover:bg-cyan-400/10 bg-transparent">
                  Ver detalles
                </Button>
              </div>

              <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 text-left hover:border-cyan-500/50 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Ingeniero de Pruebas</h3>
                <p className="text-cyan-400 mb-4">Seattle, WA</p>
                <p className="text-slate-400 mb-4">
                  Realiza pruebas exhaustivas y validación de sistemas de seguridad críticos.
                </p>
                <Button variant="outline" className="text-cyan-400 border-cyan-400 hover:bg-cyan-400/10 bg-transparent">
                  Ver detalles
                </Button>
              </div>
            </div>

            <Button size="lg" className="bg-cyan-500 text-white hover:bg-cyan-600">
              Ver todas las posiciones
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide text-balance">
              Reservas
            </h2>
            <p className="text-slate-400 text-lg mb-8 text-pretty">
              Numero xxxxxxxxxxxxx
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="px-6 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full sm:w-auto min-w-[300px]"
              />
              <Button size="lg" className="bg-cyan-500 text-white hover:bg-cyan-600 w-full sm:w-auto">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold tracking-wider text-white mb-4">Ushuaia Bike Rental</div>
              <p className="text-slate-400 text-sm">Renta la bicicleta perfecta para tu aventura.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Bicicletas</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Modelos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Seguridad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Sostenibilidad
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Nosotros</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Acerca de
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Carreras
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Prensa
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Contrato
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Bases
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Términos
                  </a>
                </li>
              </ul>
            </div>
          </div>
{/* Botón Flotante de WhatsApp */}
<a 
  href="https://wa.me/TUNUMERO" 
  target="_blank" 
  className="fixed bottom-8 right-8 z-50 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center text-white"
>
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82c1.516.903 3.124 1.381 4.771 1.382h.001c5.439 0 9.863-4.423 9.865-9.864 0-2.636-1.026-5.115-2.889-6.979-1.864-1.863-4.341-2.887-6.977-2.888-5.442 0-9.866 4.424-9.868 9.865-.001 1.748.458 3.453 1.321 4.945l-1.018 3.715 3.815-.999zm12.423-6.925c-.333-.167-1.972-.974-2.278-1.085-.306-.11-.528-.167-.75.167-.222.333-.861 1.085-1.055 1.306-.194.222-.389.25-.722.083-.333-.167-1.408-.52-2.682-1.656-1.001-.894-1.676-1.998-1.871-2.332-.194-.334-.021-.515.145-.681.15-.149.333-.389.5-.584.166-.195.222-.334.333-.556.111-.222.056-.417-.028-.584-.083-.167-.75-1.806-1.027-2.472-.27-.649-.546-.56-.75-.57-.192-.01-.413-.012-.634-.012-.222 0-.583.083-.889.417-.306.333-1.166 1.139-1.166 2.779 0 1.64 1.194 3.223 1.361 3.446.167.222 2.35 3.589 5.694 5.039.795.345 1.416.551 1.9.707.798.254 1.525.218 2.099.132.64-.096 1.972-.806 2.25-1.584.278-.778.278-1.445.194-1.584-.083-.139-.306-.222-.639-.389z" />
  </svg>
</a>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">© 2026 Ushuaia Bike Rental. Todos los derechos reservados.</p>
              <div className="flex space-x-6">
              {/* Instagram */}
              <a href="https://instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/TUNUMERO" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Whatsapp</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82c1.516.903 3.124 1.381 4.771 1.382h.001c5.439 0 9.863-4.423 9.865-9.864 0-2.636-1.026-5.115-2.889-6.979-1.864-1.863-4.341-2.887-6.977-2.888-5.442 0-9.866 4.424-9.868 9.865-.001 1.748.458 3.453 1.321 4.945l-1.018 3.715 3.815-.999zm12.423-6.925c-.333-.167-1.972-.974-2.278-1.085-.306-.11-.528-.167-.75.167-.222.333-.861 1.085-1.055 1.306-.194.222-.389.25-.722.083-.333-.167-1.408-.52-2.682-1.656-1.001-.894-1.676-1.998-1.871-2.332-.194-.334-.021-.515.145-.681.15-.149.333-.389.5-.584.166-.195.222-.334.333-.556.111-.222.056-.417-.028-.584-.083-.167-.75-1.806-1.027-2.472-.27-.649-.546-.56-.75-.57-.192-.01-.413-.012-.634-.012-.222 0-.583.083-.889.417-.306.333-1.166 1.139-1.166 2.779 0 1.64 1.194 3.223 1.361 3.446.167.222 2.35 3.589 5.694 5.039.795.345 1.416.551 1.9.707.798.254 1.525.218 2.099.132.64-.096 1.972-.806 2.25-1.584.278-.778.278-1.445.194-1.584-.083-.139-.306-.222-.639-.389z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
