

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad">
      <div className="container-nango">
        <h2 className="text-3xl font-bold">Planes</h2>
        <p className="mt-2 text-text/75 max-w-2xl">
          Modelo freemium para comunidades universitarias. Los precios pueden variar por región.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="text-xl font-semibold">Estudiante</h3>
            <p className="mt-2 text-text/70">Básico — ideal para nuevos usuarios.</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>✔ Publicar/Reservar 3 viajes/semana</li>
              <li>✔ Chat y notificaciones</li>
              <li>✔ Verificación estándar</li>
            </ul>
            <div className="mt-6"><span className="text-3xl font-bold">Gratis</span></div>
            <a href="#cta" className="btn-primary mt-6">Empezar</a>
          </div>
          <div className="card p-6 ring-2 ring-primary">
            <div className="badge bg-primary text-contrast">Popular</div>
            <h3 className="mt-3 text-xl font-semibold">Pro Generación</h3>
            <p className="mt-2 text-text/70">Más viajes y soporte prioritario.</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>✔ Viajes ilimitados</li>
              <li>✔ Soporte prioritario</li>
              <li>✔ Insignia de conductor</li>
            </ul>
            <div className="mt-6"><span className="text-3xl font-bold">$1.99</span><span className="text-sm"> /mes</span></div>
            <a href="#cta" className="btn-primary mt-6">Probar</a>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-semibold">Universidad</h3>
            <p className="mt-2 text-text/70">Para campus y asociaciones.</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>✔ Panel de administración</li>
              <li>✔ Reportes y métricas</li>
              <li>✔ Branding institucional</li>
            </ul>
            <div className="mt-6"><span className="text-3xl font-bold">Contactar</span></div>
            <a href="mailto:hello@nango.app" className="btn-ghost mt-6">Escríbenos</a>
          </div>
        </div>
      </div>
    </section>
  )
}
