import { useState, useEffect } from 'react'
import { T } from './content'
import { X } from './content-extra'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import ServicesList from './components/ServicesList'
import Certifications from './components/Certifications'
import Why from './components/Why'
import Works from './components/Works'
import Clients from './components/Clients'
import Contact from './components/Contact'
import partnerLogo from "../public/images/Logo-WEG.png";
import Partners from './components/partners'

export default function App() {
  const [lang, setLang] = useState('en')
  const t = { ...T[lang], ...X[lang] }

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  return (
    <>
      <Header t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <Services t={t} />
      <Stats t={t} />
      <ServicesList t={t} />
      <Why t={t} />
      <Works t={t} />
      <Partners logo={partnerLogo} name="WEG" country="Egypt" />
      <Clients t={t} />
      <Contact t={t} />
      <footer>{t.foot}</footer>
       
    
<div className="sidebar">

  <a href="https://www.facebook.com/share/1GpVdELLKf/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="sidebar-item s-face">
    <i className="fa-brands fa-facebook"></i>
    <span className="layer">Facebook</span>
  </a>

  <a href="https://wa.me/201009317821" target="_blank" rel="noopener noreferrer" className="sidebar-item s-whats">
    <i className="fa-brands fa-whatsapp"></i>
    <span className="layer">WhatsApp</span>
  </a>

</div>

    </>
  )
}
