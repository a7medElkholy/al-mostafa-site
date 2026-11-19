import { useState, useEffect } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { SOCIAL } from '../config'

const WaIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2a9.9 9.9 0 0 0-8.45 15.07L2 22l5.07-1.55A9.9 9.9 0 1 0 12.04 2zm0 1.8a8.1 8.1 0 1 1-4.3 14.96l-.3-.19-3 .92.95-2.93-.2-.31A8.1 8.1 0 0 1 12.04 3.8zm-3.1 3.9c-.2 0-.5.07-.77.36-.26.29-1 1-1 2.45s1.03 2.84 1.17 3.04c.15.2 2.03 3.2 5 4.36 2.47.97 2.97.78 3.5.73.54-.05 1.73-.7 1.97-1.39.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34-.3-.15-1.73-.86-2-.95-.27-.1-.46-.15-.66.14-.2.3-.76.95-.93 1.15-.17.2-.34.22-.63.07-.3-.14-1.24-.46-2.37-1.46-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.45.13-.6.13-.13.3-.34.44-.51.15-.17.2-.3.3-.49.1-.2.05-.37-.02-.51-.08-.15-.66-1.6-.91-2.19-.24-.57-.48-.5-.66-.5z"/>
  </svg>
)
const FbIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.95.4-1.7 1.8-1.7h1.6V3.8c-.3 0-1.3-.15-2.5-.15-2.5 0-4.2 1.5-4.2 4.3v2.55H7.4v3.3h2.8V22h3.3z"/>
  </svg>
)

export default function Header({ t, lang, setLang }) {
  const [qr, setQr] = useState(null) // 'whatsapp' | 'facebook' | null

  useEffect(() => {
    if (!qr) return
    const onKey = e => e.key === 'Escape' && setQr(null)
    document.addEventListener('keydown', onKey)
    const old = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = old }
  }, [qr])

  const item = qr && SOCIAL[qr]

  return (
    <>
      <header>
        <a className="logo" href="#home"><img src="/images/logo.png" alt={t.brand} /></a>
        <nav>{t.nav.map(n => <a key={n[0]} href={'#' + n[0]}>{n[1]}</a>)}</nav>
        <div className="hdr-actions">
          <button className="soc wa" onClick={() => setQr('whatsapp')} aria-label="WhatsApp"><WaIcon /></button>
          <button className="soc fb" onClick={() => setQr('facebook')} aria-label="Facebook"><FbIcon /></button>
          <button className="lang" onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}>{t.lang}</button>
        </div>
      </header>

      {qr && (
        <div className="lightbox" onClick={() => setQr(null)}>
          <button className="lb-close" onClick={() => setQr(null)} aria-label="close">✕</button>
          <div className="qr-card" onClick={e => e.stopPropagation()}>
            <h3>{t.qr[qr]}</h3>
            <div className="qr-box">
              {item.qr
                ? <img src={item.qr} alt="QR" />
                : <QRCodeSVG value={item.link} size={320} level="M" includeMargin />}
            </div>
            <p>{t.qr.scan}</p>
            <a className="btn dark" href={item.link} target="_blank" rel="noreferrer">{t.qr.open}</a>
          </div>
        </div>
      )}
    </>
  )
}
