import { CERT_IMAGE } from '../config'

// السكشن كله عبارة عن صورة واحدة (خلفية + شهادات) — حطها في config.js
export default function Certifications({ t }) {
  return (
    <section className="cert" id="cert">
      {CERT_IMAGE
        ? <img src={CERT_IMAGE} alt="" />
        : <div className="cert-ph"><span>🏆</span>{t.certTitle}<small>عرض ~1800px — Full width</small></div>}
    </section>
  )
}
