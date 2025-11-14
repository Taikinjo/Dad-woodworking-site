// lang.js

// Translation data
const LANG_DATA = {
  en: {
    // ===== Nav / shared labels =====
    nav_projects: "Projects",
    nav_about: "About",
    nav_contact: "Contact",

    nav_project_label: "Project",
    nav_about_label: "About",
    nav_contact_label: "Contact",

    // ===== Home (index.html) =====
    brand_tagline: "Handmade • Kentucky",

    home_kicker: "Handcrafted, one piece at a time",
    home_hero_title:
      "Furniture and small goods built with patience, sharp tools, and a love of good timber.",
    home_hero_body:
      "Hand made furniture and wood projects built in Kentucky. Each piece is designed to highlight the natural beauty of the wood while providing lasting function.",
    home_browse_projects: "Browse Projects",
    home_meet_makers: "Meet the makers →",
    home_featured_caption: "Featured: Outdoor Bench",

    card1_badge: "Durable Joinery",
    card1_title: "Built to last",
    card1_body:
      "Buit for outdoor and indoor use with traditional joinery.",

    card2_badge: "Local & Reclaimed",
    card2_title: "Thoughtful materials",
    card2_body:
      "Whenever possible, boards are reclaimed or locally sourced to highlight character and reduce waste.",

    card3_badge: "Custom Orders",
    card3_title: "Made for your home",
    card3_body:
      "Sizes, finishes, and hardware can be tuned to your space. Sketches welcome.",

    footer_text: " A/C Franklin Woodworking • Built by family",

    // ===== Projects list (projects.html) =====
    breadcrumbs_projects: "Home / Projects",
    projects_heading: "Projects",

    // ===== Single project (project.html) =====
    crumb_loading: "Loading…",
    build_notes: "Build notes",

    // ===== About page (about.html) =====
    about_heading: "About the Makers",
    about_p1:
      "Andrew and Cindy are the husband-and-wife team behind A/C Woodworking. With over 30 years of experience in construction and woodworking, Andrew brings a lifetime of hands-on craftsmanship and a love for building things that last.",
    about_p2:
      "Andrew and Cindy combine skill, creativity, and care in every project they take on — from rustic furniture to custom home pieces. The “A/C” in their name isn’t just their initials; it’s a symbol of partnership, family, and the shared passion that drives their craft.",
    about_footer_text: " A/C Franklin Woodworking",

    // ===== Contact page (contact.html) =====
    contact_heading: "Get in Touch",
    contact_name_label: "Name",
    contact_email_label: "Email",
    contact_message_label: "Message",
    contact_send_button: "Send",
    contact_demo_note: "No backend wired up yet.",
    contact_description:
      "Based in Kentucky. Delivery or pickup can be arranged depending on area.",
    contact_footer_text: " Andy's Woodworks",
  },

  jp: {
    // ===== Nav / shared labels =====
    nav_projects: "プロジェクト",
    nav_about: "概要",
    nav_contact: "お問い合わせ",

    nav_project_label: "プロジェクト",
    nav_about_label: "概要",
    nav_contact_label: "お問い合わせ",

    // ===== Home (index.html) =====
    brand_tagline: "ハンドメイド・ケンタッキー",

    home_kicker: "一つひとつ、手作業で",
    home_hero_title:
      "時間をかけて仕上げた家具と小物。鋭い道具と木へのこだわりから生まれます。",
    home_hero_body:
      "ケンタッキーで製作しているハンドメイド家具と木工品です。木目の美しさを活かしながら、長く使える実用性を大切にしています。",
    home_browse_projects: "作品一覧を見る",
    home_meet_makers: "職人について →",
    home_featured_caption: "注目作品：屋外ベンチ",

    card1_badge: "丈夫な仕口",
    card1_title: "長く使えるつくり",
    card1_body:
      "屋内・屋外どちらにも対応できる、伝統的な仕口で組み上げています。",

    card2_badge: "地元材・古材",
    card2_title: "素材へのこだわり",
    card2_body:
      "できる限り古材や地元の木材を使用し、木の表情を活かしつつ無駄を減らしています。",

    card3_badge: "オーダーメイド対応",
    card3_title: "あなたの家のために",
    card3_body:
      "サイズや仕上げ、金具などは設置場所に合わせて調整可能です。ラフなスケッチからでもご相談ください。",

    footer_text: " A/C Franklin Woodworking • 家族でつくる木工",

    // ===== Projects list (projects.html) =====
    breadcrumbs_projects: "ホーム / プロジェクト",
    projects_heading: "プロジェクト一覧",

    // ===== Single project (project.html) =====
    crumb_loading: "読み込み中…",
    build_notes: "製作ノート",

    // ===== About page (about.html) =====
    about_heading: "職人について",
    about_p1:
      "A/C Woodworking は、アンドリューとシンディの夫婦で営む工房です。建設業と木工の分野で30年以上の経験を持つアンドリューは、長く使えるものをつくることに情熱を注いできました。",
    about_p2:
      "アンドリューとシンディは、素朴な家具からオーダーメイドの住宅用家具まで、一つひとつの作品に技術と創造性、そして思いやりを込めています。「A/C」という名前は頭文字であると同時に、家族として共に歩み、共にものづくりを続けてきた証でもあります。",
    about_footer_text: " A/C Franklin Woodworking",

    // ===== Contact page (contact.html) =====
    contact_heading: "お問い合わせ",
    contact_name_label: "お名前",
    contact_email_label: "メールアドレス",
    contact_message_label: "メッセージ",
    contact_send_button: "送信",
    contact_demo_note: "バックエンドはまだ接続されていません。",
    contact_description:
      "拠点はケンタッキー州です。地域により配達またはお引き取りの調整が可能です。",
    contact_footer_text: " Andy's Woodworks",
  },
};

// Current language (saved between visits)
let currentLang = localStorage.getItem("lang") || "en";

function setLanguage(lang) {
  if (!LANG_DATA[lang]) {
    lang = "en";
  }

  currentLang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = LANG_DATA[lang][key];
    if (typeof text === "string") {
      el.textContent = text;
    }
  });
}

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);
});
