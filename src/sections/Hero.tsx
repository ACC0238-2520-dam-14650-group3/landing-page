

import heroImage from '../assets/hero-of-image.png'

export default function Hero() {
  return (
    <section className="section-pad">
      <div className="container-nango grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="badge">Carpool universitario seguro</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Comparte el viaje, <span className="text-primary">ahorra</span> y llega seguro con <span className="text-secondary-text">Ñango</span>.
          </h1>
          <p className="text-lg text-text/80 max-w-xl">
            Conecta con estudiantes de tu universidad para compartir rutas confiables, validar perfiles y pagar sin fricción.
          </p>
          <div className="flex gap-3">
            <a href="#cta" className="btn-primary">Descargar app</a>
            <a href="#how" className="btn-ghost">Cómo funciona</a>
          </div>
          <ul className="flex gap-6 pt-4 text-sm text-text/70">
            <li>✔ Verificación de identidad</li>
            <li>✔ Notificaciones en tiempo real</li>
            <li>✔ Pagos seguros</li>
          </ul>
        </div>
        <div className="relative">
          <div className="card p-4">
            <img src={heroImage} className="rounded-2xl w-full" alt="Mockups de la app Ñango" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden sm:block">
            <div className="card px-4 py-3 bg-primary text-contrast">
              <p className="text-sm">+2,500 estudiantes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
