import React from 'react'
export default function Footer() {
  return (
    <footer className="mt-24 border-t border-text/10 bg-contrast">
      <div className="container-nango py-12 flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src="/src/assets/nango-logo.svg" className="h-7 w-7" alt="Ñango" />
          <span className="font-semibold">Ñango</span>
        </div>
        <p className="text-sm text-text/70">
          © {new Date().getFullYear()} Ñango. Hecho con ♥ para comunidades universitarias.
        </p>
      </div>
    </footer>
  )
}
