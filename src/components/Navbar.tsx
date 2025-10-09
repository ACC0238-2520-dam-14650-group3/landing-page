export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-bg/70 backdrop-blur border-b border-text/10">
      <div className="container-nango flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/src/assets/nango-logo.svg" className="h-8 w-8" alt="Ñango" />
          <span className="font-semibold tracking-tight">Ñango</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a className="nav-link" href="#features">Funcionalidades</a>
          <a className="nav-link" href="#how">Cómo funciona</a>
          <a className="nav-link" href="#pricing">Planes</a>
          <a className="nav-link" href="#faq">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#cta" className="btn-ghost hidden sm:inline-flex">Ver demo</a>
          <a href="#cta" className="btn-primary">Descargar</a>
        </div>
      </div>
    </header>
  )
}
