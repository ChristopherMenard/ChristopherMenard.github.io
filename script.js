const translations = 
{
  fr: {
    job_title: "Programmeur Jouabilité",
    main_page_title: "Projets",
  },

  en: {
    job_title: "Gameplay Programmer",
    main_page_title: "Projects",
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  console.log("Changed language " + lang);
}

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "fr";
  setLanguage(savedLang);
});