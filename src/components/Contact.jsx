import { useState } from 'react'
import { CONTACT, MAP_EMBED } from '../config'
import { Head } from './Common'

export default function Contact({ t }) {
  const c = t.contact
  const [f, setF] = useState({ name: '', tel: '', msg: '' })
  const upd = k => e => setF({ ...f, [k]: e.target.value })
  // مفيش باك إند: الفورم بيفتح واتساب برسالة جاهزة
  const send = e => {
    e.preventDefault()
    const text = `${c.wtxt}${f.name}\n${f.tel}\n${f.msg}`
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <section className="sec" id="contact">
      <Head k={c.k} h={c.h} />
      <div className="contact">
        <div className="info">
          <div className="irow"><div className="ic">📞</div><div><small>{c.phone}</small><b>{CONTACT.phone}</b></div></div>
          <div className="irow"><div className="ic">💬</div><div><small>{c.wa}</small><b>{CONTACT.phone}</b></div></div>
          <div className="irow"><div className="ic">✉️</div><div><small>{c.mail}</small><b>{CONTACT.email}</b></div></div>
        </div>
        <form onSubmit={send}>
          <input placeholder={c.name} value={f.name} onChange={upd('name')} required />
          <input placeholder={c.tel} value={f.tel} onChange={upd('tel')} required />
          <textarea placeholder={c.msg} value={f.msg} onChange={upd('msg')} />
          <button className="btn dark" type="submit">{c.send}</button>
        </form>
      </div>

      <div className="map">
        <h3>{t.mapTitle}</h3>
        {MAP_EMBED
          ? <iframe src={MAP_EMBED} title="map" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
          : <div className="map-ph"><span>📍</span>{t.mapPh}</div>}
      </div>
    </section>
  )
}
