export default function Services({ t }) {
  return (
    <section className="cards">
      {t.cards.map((x, k) => (
        <div className="card" key={k} tabIndex="0">
          <div className="inner">
            <div className="face front"><span className="ic">{x[0]}</span><b>{x[1]}</b></div>
            <div className="face back">{x[2]}</div>
          </div>
        </div>
      ))}
    </section>
  )
}
