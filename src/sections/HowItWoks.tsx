import React from 'react'

const steps = [
  { n: 1, t: 'Crea tu perfil', d: 'Regístrate con tu correo institucional y completa la verificación.' },
  { n: 2, t: 'Publica o reserva', d: 'Ofrece un ride o elige una ruta disponible según horario y campus.' },
  { n: 3, t: 'Viaja seguro', d: 'Chatea, recibe notificaciones y realiza el pago desde la app.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="section-pad">
      <div className="container-nango">
        <h2 className="text-3xl font-bold">¿Cómo funciona?</h2>
        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {steps.map(s => (
            <div key={s.n} className="card p-6">
              <span className="badge">Paso {s.n}</span>
              <h3 className="mt-3 font-semibold">{s.t}</h3>
              <p className="mt-2 text-text/70">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
