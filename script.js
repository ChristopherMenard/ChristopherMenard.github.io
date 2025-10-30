const translations = 
{
  fr: {
        job_title: "Programmeur Jouabilité",
        main_page_title: "Projets",
        proj1_desc1: "Discount Delirium est un projet étudiant fait par 4 personnes sur Unity. Le jeu est dans un contexte de Black Friday et le joueur joue un client qui cherche à profiter au maximum des rabais. Par contre, le joueur devra surveiller les autres clients tous aussi frénétiques lors de l'événement. Le joueur devra acheter le plus d'objets possible dans ce chaos avant la fin du temps. Ce qui donnera un plus gros score et plus de points pour acheter des améliorations sur le panier que ce soit des meilleurs contrôles, une vitesse améliorée ou des armes plus efficaces.",
        proj1_title1: "Ce que j'ai fait",
        proj1_title2: "Les Armes",
        proj1_desc2: "Le joueur a deux armes en sa possession: Une arme de mêlée et une arme à distance. L'arme de mêlée va pouvoir frapper les clients pour leur voler leur objet de leur panier. Plus on augmente l'arme, plus vite il aura et plus d'objets il volera. L'arme à distance est un lance-patate. Lorsque la patate touche un client, il sera ralenti, ce qui peut rendre plus facile l'attaque au corps à corps ou une cible parfaite pour lui rentrer en collision comme un train. L'arme à distance utilise un pool de munition au lieu de créer un projectile à chaque fois. Quand le joueur améliore l'arme à distance, il augmente la vitesse et la distance du projectile.",
        proj1_title3: "Le menu/navigation",
        proj1_desc3: "La navigation est possible grâce à un curseur virtuel lorsqu'on joue avec une manette. Elle disparaît lorsqu'on prend le clavier et réapparaît quand on prend la manette. On peut afficher aller modifier le son du jeu, afficher le tableau de score, faire les améliorations dans le jeu, etc. La gestion de montrer et enlever le curseur est gérée par le GameManager. ",
        proj1_title4: "Le GameManager",
        proj1_desc4: "Le GameManager gère les transitions d'état de jeu. Par exemple, de donner les contrôles au joueur quand le décompte est fini, d'arrêter la partie quand je joueur se met en pause, d'afficher le score quand la partie se termine, etc. Le GameManager et les états du jeu sont programmés avec une Finite State Machine. Cela permet un meilleur contrôle du jeu et permet d'avoir un code plus clair. De plus, j'utilise le design pattern de l'Observer, qui permet de faire des appels sans avoir besoin d'une référence à un objet. ",
        proj1_desc5: "Voici un apercu du jeux avec les améliorations",
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

/*window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "fr";
  setLanguage(savedLang);
});*/

window.onload = function () {
    setLanguage("fr");
    console.log("test");
};