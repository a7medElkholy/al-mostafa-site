/* =====================================================
   ✅ مكان الصور
   حط الصور في فولدر  public/images  وبعدين اكتب المسار هنا
   مثال:  "/images/hero1.jpg"
   لو سيبته فاضي ""  هيظهر مربع placeholder
   ===================================================== */
export const HERO_IMAGES = [ "/images/9.jpeg", "/images/3.jpg.jpeg", "/images/5.jpg.jpeg"]            //3خلفيات الهوم
export const WORK_IMAGES = ["/images/3.jpg.jpeg", "/images/4.jpg.jpeg", "/images/5.jpg.jpeg", "/images/6.jpg.jpeg", "/images/7.jpg.jpeg", "/images/9.jpeg"] // 6 صور للأعمال
export const CLIENT_LOGOS = ["", "", "", "", "", "", "", ""] // لوجوهات العملاء (زوّد أو قلّل)

/* ✅ بيانات التواصل — رقم الواتساب بصيغة دولية من غير + */
export const CONTACT = {
  phone: "+20 1009317821",
  whatsapp: "201009317821",
  email: "info@almostafa.com",
}

export const SLIDE_MS = 5000     // مدة كل خلفية في الهوم
export const COUNT_DELAY = 600   // ديلاي قبل ما الأرقام تبدأ
export const COUNT_MS = 2200     // مدة عد الأرقام

/* ✅ صورة سكشن الشهادات (هي السكشن كله) — مثال: "/images/certifications.png" */
export const CERT_IMAGE = ""

/* ✅ الخريطة: من Google Maps اختار Share ← Embed a map ← انسخ قيمة src بس
   مثال: "https://www.google.com/maps/embed?pb=!1m18!1m12..." */
export const MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3449.1712347713124!2d31.216716775559313!3d30.175102174857994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDEwJzMwLjQiTiAzMcKwMTMnMDkuNSJF!5e0!3m2!1sen!2seg!4v1795181514546!5m2!1sen!2seg"

/* ✅ السوشيال: حط اللينك وهيتعمل QR تلقائي منه.
   ولو عندك صورة QR جاهزة حطها في qr (مثال "/images/qr-whatsapp.png") وهتتعرض بدل التلقائي */
export const SOCIAL = {
  whatsapp: { link: "https://wa.me/201009317821", qr: "" },
  facebook: { link: "https://www.facebook.com/", qr: "" },
}
