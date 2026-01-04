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
            <div>
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
            </div>
          </div>


        </div>
      </section>


      {/* CATALOGO Section */}
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
      <section id="acerca" className="py-24 bg-slate-900">
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
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="carreras" className="py-24 bg-slate-950">
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
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide text-balance">
              El Futuro del Transporte Está Aquí
            </h2>
            <p className="text-slate-400 text-lg mb-8 text-pretty">
              Sé parte de la revolución de la movilidad autónoma. Suscríbete para recibir las últimas actualizaciones.
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
              <div className="text-2xl font-bold tracking-wider text-white mb-4">AUTONO</div>
              <p className="text-slate-400 text-sm">Liderando el futuro de la movilidad autónoma.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Producto</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Tecnología
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
              <h4 className="text-white font-semibold mb-4">Compañía</h4>
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
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Términos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">© 2025 Autono. Todos los derechos reservados.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
