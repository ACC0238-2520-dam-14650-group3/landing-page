
const faqs = [
  { q: '¿Quién puede usar Ñango?', a: 'Estudiantes y personal verificado de universidades participantes.' },
  { q: '¿Es seguro?', a: 'Sí. Usamos verificación de identidad y controles comunitarios.' },
  { q: '¿Cómo pago?', a: 'Directamente desde la app con métodos locales compatibles.' },
  { q: '¿Puedo cambiar el idioma?', a: 'Sí, disponible en español e inglés desde ajustes.' }
]
export default function FAQ() {
  return (
    <section id="faq" className="section-pad">
      <div className="container-nango">
        <h2 className="text-3xl font-bold">Preguntas frecuentes</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {faqs.map(f => (
            <details key={f.q} className="card p-6 open:shadow-md">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-text/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
