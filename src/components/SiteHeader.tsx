const LOGO_CONSEJO = `${import.meta.env.BASE_URL}logo_consejo.jpeg`
const LOGO_CULTIVA = `${import.meta.env.BASE_URL}logo_cultiva.jpeg`

export function SiteHeader() {
  return (
    <header className="site-header">
      <img
        className="site-header__logo"
        src={LOGO_CONSEJO}
        alt="Consejo Consultivo LGBTI"
      />
      <img
        className="site-header__logo"
        src={LOGO_CULTIVA}
        alt="CULTIVA"
      />
    </header>
  )
}
