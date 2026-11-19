import { useState, useEffect, useRef } from 'react'
import { COUNT_DELAY, COUNT_MS } from '../config'

function Counter({ to, run }) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!run) return
    let raf
    const id = setTimeout(() => {
      const t0 = performance.now()
      const tick = now => {
        const p = Math.min((now - t0) / COUNT_MS, 1)
        setV(Math.floor(p * to))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, COUNT_DELAY)
    return () => { clearTimeout(id); cancelAnimationFrame(raf) }
  }, [run, to])
  return <span className="n">{v}{v >= to ? '+' : ''}</span>
}

export default function Stats({ t }) {
  const ref = useRef()
  const [run, setRun] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(e => {
      if (e[0].isIntersecting) { setRun(true); o.disconnect() }
    }, { threshold: 0.4 })
    o.observe(ref.current)
    return () => o.disconnect()
  }, [])

  return (
    <section className="stats" ref={ref}>
      <p>{t.stSub}</p>
      <h2>{t.stTitle}</h2>
      <div className="row">
        {t.stats.map((s, k) => (
          <div className="st" key={k}>
            <Counter to={s[0]} run={run} />
            <div className="t">{s[1]}<br /><b>{s[2]}</b></div>
          </div>
        ))}
      </div>
    </section>
  )
}
