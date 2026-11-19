/* =====================================================
   ✅ مكان الصور
   حط الصور في فولدر  public/images  وبعدين اكتب المسار هنا
   مثال:  "/images/hero1.jpg"
   لو سيبته فاضي ""  هيظهر مربع placeholder
   ===================================================== */
export const HERO_IMAGES = [ "public/images/9.jpeg", "public/images/3.jpg.jpeg", "public/images/5.jpg.jpeg"]            //3خلفيات الهوم
export const WORK_IMAGES = ["public/images/3.jpg.jpeg", "public/images/4.jpg.jpeg", "public/images/5.jpg.jpeg", "public/images/6.jpg.jpeg", "public/images/7.jpg.jpeg", "public/images/9.jpeg"] // 6 صور للأعمال
export const CLIENT_LOGOS = ["", "", "", "", "", "", "", ""] // لوجوهات العملاء (زوّد أو قلّل)

/* ✅ بيانات التواصل — رقم الواتساب بصيغة دولية من غير + */
export const CONTACT = {
  phone: "+20 100 000 0000",
  whatsapp: "201000000000",
  email: "info@example.com",
}

export const SLIDE_MS = 5000     // مدة كل خلفية في الهوم
export const COUNT_DELAY = 600   // ديلاي قبل ما الأرقام تبدأ
export const COUNT_MS = 2200     // مدة عد الأرقام

/* ✅ صورة سكشن الشهادات (هي السكشن كله) — مثال: "/images/certifications.png" */
export const CERT_IMAGE = ""

/* ✅ الخريطة: من Google Maps اختار Share ← Embed a map ← انسخ قيمة src بس
   مثال: "https://www.google.com/maps/embed?pb=!1m18!1m12..." */
export const MAP_EMBED = ""

/* ✅ السوشيال: حط اللينك وهيتعمل QR تلقائي منه.
   ولو عندك صورة QR جاهزة حطها في qr (مثال "/images/qr-whatsapp.png") وهتتعرض بدل التلقائي */
export const SOCIAL = {
  whatsapp: { link: "https://wa.me/201000000000", qr: "" },
  facebook: { link: "https://www.facebook.com/", qr: "" },
}
