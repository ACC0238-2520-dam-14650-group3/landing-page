import ctaImage from '../assets/cta-oficial-ilustration.png'

export default function CTA() {
  return (
    <section id="cta" className="section-pad">
      <div className="container-nango">
        <div className="card p-8 lg:p-12 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold">¿Listo para moverte con Ñango?</h2>
            <p className="mt-2 text-text/75">Únete a la comunidad y comparte tu próximo viaje.</p>
            <div className="mt-6 flex gap-3">
              <a className="btn-primary" href="#">App Store</a>
              <a className="btn-ghost" href="#">Google Play</a>
            </div>
          </div>
          <img className="rounded-2xl w-full" src={ctaImage} alt="Mapa Ñango" />
        </div>
      </div>
    </section>
  )
}
