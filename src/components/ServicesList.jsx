import { Head } from './Common'

export default function ServicesList({ t }) {
  const s = t.svc
  return (
    <section className="sec alt" id="services">
      <div className="svc">
        <div className="svc-text">
          <small className="kicker">{s.k}</small>
          <h3><span>{s.h1}</span><br /><b>{s.h2}</b></h3>
          <p>{s.p1}</p>
          <p>{s.p2}</p>
          <a className="btn dark" href="#contact">{t.btn}</a>
        </div>
        <ul className="svc-list">
          {s.items.map((x, k) => <li key={k}>{x}</li>)}
        </ul>
      </div>
    </section>
  )
}
