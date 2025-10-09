import React from 'react'

const features = [
  { title: 'Perfiles verificados', desc: 'Validación con credencial universitaria y estado de aprobación visible.', icon: '🔒' },
  { title: 'Rutas y horarios', desc: 'Publica y reserva asientos con filtros por campus, horarios y costos.', icon: '🗺️' },
  { title: 'Notificaciones', desc: 'Actualizaciones sobre solicitudes, chat y estado del viaje.', icon: '🔔' },
  { title: 'Pagos integrados', desc: 'Procesamiento seguro para dividir costos de manera transparente.', icon: '💳' },
  { title: 'Idiomas', desc: 'Interfaz bilingüe (ES/EN) desde ajustes.', icon: '🌐' },
  { title: 'Soporte', desc: 'Centro de ayuda y reporte de incidentes en la app.', icon: '🛟' }
]

export default function Features() {
  return (
    <section id="features" className="section-pad">
      <div className="container-nango">
        <h2 className="text-3xl font-bold">Funcionalidades clave</h2>
        <p className="mt-2 text-text/75 max-w-2xl">Inspirado en el diseño de la app: simple, claro y pensado para estudiantes.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => (
            <div key={f.title} className="card p-6">
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-text/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
