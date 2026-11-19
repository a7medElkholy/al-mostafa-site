import { useState, useEffect } from 'react'
import { HERO_IMAGES, SLIDE_MS } from '../config'

export default function Hero({ t }) {
  const [i, setI] = useState(0)
  // بيتصفر التايمر كل ما الشريحة تتغير (حتى لو يدوي)
  useEffect(() => {
    const id = setInterval(() => setI(x => (x + 1) % 3), SLIDE_MS)
    return () => clearInterval(id)
  }, [i])

  return (
    <section className="hero" id="home">
      {t.slides.map((s, k) => (
        <div key={k} className={`slide s${k}${k === i ? ' on' : ''}`}
          style={HERO_IMAGES[k] ? { backgroundImage: `url(${HERO_IMAGES[k]})` } : null}>
          <div>
            <h2>{s[0]}</h2><h2>{s[1]}</h2><h1>{s[2]}</h1>
            <a className="btn" href="#contact">{t.btn}</a>
          </div>
        </div>
      ))}
      <button className="arrow l" onClick={() => setI((i + 2) % 3)}>‹</button>
      <button className="arrow r" onClick={() => setI((i + 1) % 3)}>›</button>
      <div className="dots">
        {[0, 1, 2].map(k => <i key={k} className={k === i ? 'on' : ''} onClick={() => setI(k)} />)}
      </div>
    </section>
  )
}
