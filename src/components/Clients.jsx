import { CLIENT_LOGOS } from '../config'
import { Ph, Head } from './Common'

export default function Clients({ t }) {
  return (
    <section className="sec alt" id="clients">
      <Head k={t.clients.k} h={t.clients.h} />
      <div className="clients">
        {CLIENT_LOGOS.map((l, k) => (
          <div className="client" key={k}>
            {l ? <img src={l} alt="" /> : <Ph icon="🏢" text={t.clients.ph} />}
          </div>
        ))}
      </div>
    </section>
  )
}
