import { useState, useEffect } from 'react'
import { WORK_IMAGES } from '../config'
import { Ph, Head } from './Common'

export default function Works({ t }) {
  const [open, setOpen] = useState(null) // رقم الصورة المفتوحة أو null
  const items = t.works.items
  const count = items.length

  const close = () => setOpen(null)
  const next = () => setOpen(o => (o + 1) % count)
  const prev = () => setOpen(o => (o + count - 1) % count)

  // كيبورد: Esc يقفل، الأسهم تنقل — ومنع سكرول الصفحة وهي مفتوحة
  useEffect(() => {
    if (open === null) return
    const onKey = e => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    const old = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = old
    }
  }, [open])

  return (
    <section className="sec" id="works">
      <Head k={t.works.k} h={t.works.h} />
      <div className="works">
        {items.map((w, k) => (
          <div className={`work${WORK_IMAGES[k] ? ' zoomable' : ''}`} key={k}
            onClick={() => WORK_IMAGES[k] && setOpen(k)}>
            {WORK_IMAGES[k] ? <img src={WORK_IMAGES[k]} alt={w[0]} /> : <Ph icon="🖼️" text={t.works.ph} />}
            <div className="cap"><b>{w[0]}</b><span>{w[1]}</span></div>
          </div>
        ))}
      </div>

      {open !== null && (
        <div className="lightbox" onClick={close}>
          <button className="lb-close" onClick={close} aria-label="close">✕</button>
          <button className="lb-nav lb-prev" onClick={e => { e.stopPropagation(); prev() }}>‹</button>
          <figure onClick={e => e.stopPropagation()}>
            <img src={WORK_IMAGES[open]} alt={items[open][0]} />
            <figcaption><b>{items[open][0]}</b><span>{items[open][1]}</span></figcaption>
          </figure>
          <button className="lb-nav lb-next" onClick={e => { e.stopPropagation(); next() }}>›</button>
        </div>
      )}
    </section>
  )
}
