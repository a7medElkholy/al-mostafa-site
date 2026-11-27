import './Partners.css'

// logo: مسار الصورة المستوردة | name: اسم الشركة | country: الدولة
export default function Partners({ logo, name = 'اسم الشركة', country = 'الدولة' }) {
  return (
    <section className="partners" id="partners" dir="rtl">
      <div className="partners__wrap">
        <div className="partners__text">
          <p className="partners__label">الاعتماد</p>
          <h2>شريك معتمد لعلامة تجارية متميزة</h2>
          <p className="partners__lead">
            نعمل مع علامة تجارية موثوقة في مجال عزل التكييف والمواسير. نلتزم بمواصفات الشركة
            المصنّعة في التوريد والتنفيذ، ليحصل عميلنا على جودة تدوم وأداء يُعتمد عليه.
          </p>
          <ul className="partners__points">
            <li>منتجات أصلية</li>
            <li>تنفيذ وفق مواصفات المصنّع</li>
            <li>فريق فني متخصص</li>
          </ul>
        </div>

        <div className="partners__brand">
          <div className="partners__logo">
            {logo ? <img src={logo} alt={name} /> : <span>ضع الشعار هنا</span>}
          </div>
          <p className="partners__name">{name}</p>
          <p className="partners__country">{country}</p>
        </div>
      </div>
    </section>
  )
}
