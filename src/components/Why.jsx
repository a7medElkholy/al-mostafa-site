import { Head } from './Common'

export default function Why({ t }) {
  const w = t.why
  return (
    <section className="sec" id="why">
      <Head k={w.k} h={w.h} />
      <div className="why">
        {w.items.map((it, k) => (
          <div className="why-card" key={k}>
            <div className="why-ic">{it[0]}</div>
            <h4>{it[1]}</h4>
            {it[2].map((p, j) => <p key={j}>{p}</p>)}
          </div>
        ))}
      </div>
    </section>
  )
}
