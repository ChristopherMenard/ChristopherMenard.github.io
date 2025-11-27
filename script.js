const translations = 
{
  fr: {
        job_title: "Programmeur Jouabilité",
        main_page_title: "Projets",

        //Discount Delirium
        discount_info1: "Projet de fin d’études – AEC en Programmation de jeux vidéo",
        discount_info2: "Sortie : mai 2024 sur Itch.io",
        discount_info3: "Rôle : Programmeur gameplay / UI",
        discount_info4: "Équipe : 4 développeurs",
        discount_info5: "Outil : Unity (C#)",
        discount_info6: "Lien Itch.io",
        discount_overview_desc: "Discount Delirium est un jeu d’action humoristique se déroulant durant le chaos du Black Friday. Le joueur incarne un client déterminé à récupérer un maximum d’objets avant la fin du temps imparti, tout en affrontant d'autres clients frénétiques. Chaque objet ramassé augmente le score et permet ensuite d’acheter des améliorations pour optimiser le panier : vitesse, maniabilité et puissance d’attaque.",
        discount_title1: "Mes contributions",
        discount_title2: "Système d’armes",
        discount_desc2: "J’ai développé deux armes principales : une arme de mêlée permettant de voler des objets aux clients, et un lance-patate ralentissant les ennemis à distance. Le système repose sur un object pooling pour optimiser les performances et inclut des améliorations influençant la vitesse d’attaque, la portée, la vitesse des projectiles, ainsi que la gestion complète des collisions et des comportements ennemis.",
        discount_title3: "Menu et navigation",
        discount_desc3: "J’ai conçu un système de navigation hybride compatible manette et clavier/souris. Un curseur virtuel dynamique apparaît lors de l’utilisation d’une manette et disparaît lorsque le joueur revient au clavier. Les menus incluent les réglages audio, le tableau des scores et le système d’améliorations. Toute la gestion du curseur et des transitions est centralisée via le GameManager, dont l’architecture en Finite State Machine assure une structure claire et un contrôle fiable des états du jeu.",
        discount_title4: "GameManager",
        discount_desc4: "Le GameManager centralise la logique globale du jeu et supervise la progression de la partie, incluant le lancement des manches, la gestion des pauses et la validation de la fin de partie. Sa structure basée sur une Finite State Machine assure une organisation robuste des différents états, tandis que l’intégration du design pattern Observer permet une communication flexible et découplée entre les systèmes, améliorant la maintenabilité et la clarté du code.",
        discount_desc5: "Voici un aperçu du jeu et de son système d’améliorations.",

        //Rush Rumble
        rush_decs1: "Rush Rumble est un jeu multijoueur dans le style de Wipeout et Fall Guys. Une équipe de coureurs doit atteindre un point de contrôle pour marquer des points, tandis que l'équipe des maîtres du jeu doit tenter de les arrêter, de les ralentir ou de les faire tomber pour les empêcher d'atteindre le point de contrôle. Les coureurs disposent d'un temps limité qui se réinitialise au point de contrôle ; s'ils n'y parviennent pas, c'est un point pour les maîtres du jeu. La première équipe à atteindre 10 points remporte la partie. Ce jeu a été créé par quatre étudiants dans le cadre d'un projet scolaire, avec Unity et Mirror. Les équipes s'affrontent dans une arène colorée, remplie de pièges et d'obstacles qui mettront à l'épreuve les compétences des coureurs",
        rush_title1: "Ce que j'ai fait :",
        rush_title1: "Finite State Machine",
        rush_desc2: "Mon travail consistait principalement à créer le contrôleur du personnage principal, le coureur. C'était un élément essentiel pour que le gameplay en 3D soit vraiment agréable. Il a été développé à l'aide d'une machine à états finis. J'ai également travaillé sur les bonus avec un coéquipier. J'ai créé le bonus d'invisibilité : le coureur peut se voir lui-même, mais pas les autres.",

        //Ethereal Estate
        ethereal_main_title: "Ethereal Estate",
        ethereal_info1: "Projet de fin d’études – BAC en création de jeux vidéo",
        ethereal_info2: "Sortie : 12 mars 2021 sur Steam",
        ethereal_info3: "Rôle : Programmeur | Marketing",
        ethereal_info4: "Équipe : 34 développeurs",
        ethereal_info5: "Outils : Unreal Engine 4 | Perforce | Handsoft | Notion",
        ethereal_info6: "Steam Page",
        ethereal_overview_desc: "Ethereal Estate est un jeu bac à sable basé sur la physique dans lequel le joueur incarne un fantôme semant le chaos dans un manoir victorien. Développé par une équipe de 34 étudiants, le jeu a été lancé gratuitement sur Steam et a reçu d’excellents retours lors des playtests.",
        ethereal_title2: "Programmation",
        ethereal_prog1: "Développement de la majorité des objets interactifs (props) du manoir.",
        ethereal_prog2: "Implémentation des interactions : prise, manipulation, collisions et comportements physiques.",
        ethereal_prog3: "Création de fonctionnalités spécifiques basées sur les besoins du design système.",
        ethereal_prog4: "Ajout de Physics Constraints pour les meubles à portes et tiroirs afin d’obtenir des mouvements réalistes.",
        ethereal_prog5: "Participation active à la correction de bugs en collaboration avec l’assurance qualité.",
        ethereal_title3: "Marketing – Trailer officiel",
        ethereal_mark1: "Conception du scénarimage du trailer.",
        ethereal_mark2: "Capture de séquences de gameplay.",
        ethereal_mark3: "Montage complet de la bande-annonce promotionnelle.",
        ethereal_title4: "Compétences développées",
        ethereal_skill1: "Organisation et gestion de production.",
        ethereal_skill2: "Résolution de problèmes techniques.",
        ethereal_skill3: "Collaboration interdisciplinaire (design, QA, programmation).",
        ethereal_skill4: "Créativité et autonomie.",
        ethereal_skill5: "Développement de fonctionnalités inédites.",
        ethereal_skill6: "Communication claire au sein d’une équipe nombreuse."
  },

  en: {
        job_title: "Gameplay Programmer",
        main_page_title: "Projects",

        //Discount Delirium
        discount_info1: "Final year project – AEC in Video Game Programming",
        discount_info2: "Release: May 2024 on Itch.io",
        discount_info3: "Role: Gameplay / UI Programmer",
        discount_info4: "Team: 4 developers",
        discount_info5: "Engine: Unity (C#)",
        discount_info6: "Link Itch.io",
        discount_overview_desc: "Discount Delirium is a humorous action game set during the chaos of Black Friday. The player controls a customer determined to collect as many items as possible before time runs out, while dealing with equally frantic shoppers. Each collected item increases the score and allows players to purchase upgrades that improve cart speed, handling, and offensive capabilities.",
        discount_title1: "My Contributions",
        discount_title2: "Weapons System",
        discount_desc2: "I developed a set of two complementary weapons: a melee weapon used to steal items from other customers, and a potato launcher that slows down enemies from a distance. The weapon system uses object pooling to optimize performance, and includes upgrades that enhance attack speed, projectile range, and projectile velocity, as well as full collision handling and enemy behavior reactions.",
        discount_title3: "Menu & Navigation",
        discount_desc3: "I designed a hybrid navigation system compatible with both controller and keyboard/mouse. A dynamic virtual cursor appears when using a controller and disappears when switching back to the keyboard. Menus include audio settings, the scoreboard, and the upgrade system. All cursor behavior and gameplay transitions are managed by the GameManager, which relies on a Finite State Machine architecture to ensure clear and reliable state control.",
        discount_title4: "GameManager",
        discount_desc4: "The GameManager centralizes the overall game logic and orchestrates the flow of the gameplay, including starting rounds, handling pauses, and processing end-of-game states. Its Finite State Machine structure ensures clean organization and scalable behavior management. I also implemented the Observer design pattern, enabling flexible and decoupled communication between systems, which significantly improves code clarity and maintainability.",
        discount_desc5: "Here is an overview of the game along with its upgrade system.",

        //Rush Rumble
        rush_decs1: "Rush Rumble is a multiplayer game in the style of Wipeout and Fall Guys. A team of runner must run towards the checkpoint to make a point while the team of game master must try to stop them, slow them or make them fall so they can't reach it. The runners have a time limit that reset on the checkpoint, if they can't make it, its a point for the game masters. First team to achieve 10 points win. Its a game made by 4 students as a school project with Unity and Mirror. The teams competes in a colorful arena full of traps and obstacles that will test the skills of the runners",
        rush_title1: "What I did :",
        rush_title1: "Finite State Machine",
        rush_desc2: "My work was mainly to make the character controller for the runner It was a major part for this game to make the 3C feel really good. It was made with an Finite State Machine. I also worked on the power ups with a teammate. I made the invisibility power up so the runner can see himself but not the rest. ",

        //Ethereal Estate
        ethereal_main_title: "Ethereal Estate",
        ethereal_info1: "Final study project – Bachelor's degree in Game Creation",
        ethereal_info2: "Release: March 12, 2021 on Steam",
        ethereal_info3: "Role: Programmer | Marketing",
        ethereal_info4: "Team: 34 developers",
        ethereal_info5: "Steam Page",
        ethereal_info6: "Tools : Unreal Engine 4 | Perforce | Handsoft | Notion",
        ethereal_overview_desc: "Ethereal Estate is a physics-based sandbox game where the player embodies a ghost causing chaos inside a Victorian manor. Developed by a team of 34 students, the game was released for free on Steam and received excellent feedback during playtests.",
        ethereal_title2: "Programming",
        ethereal_prog1: "Developed most of the interactive objects (props) within the manor.",
        ethereal_prog2: "Implemented gameplay interactions: grabbing, manipulating, collisions, and physics-driven behaviors.",
        ethereal_prog3: "Created specific gameplay features based on system design requirements.",
        ethereal_prog4: "Added Physics Constraints for furniture with doors and drawers to ensure realistic movements.",
        ethereal_prog5: "Actively contributed to bug fixing in collaboration with the quality assurance team.",
        ethereal_title3: "Marketing – Official Trailer",
        ethereal_mark1: "Created the storyboard for the trailer.",
        ethereal_mark2: "Captured gameplay footage.",
        ethereal_mark3: "Edited and assembled the full promotional trailer.",
        ethereal_title4: "Skills Developed",
        ethereal_skill1: "Organization and production management.",
        ethereal_skill2: "Technical problem-solving.",
        ethereal_skill3: "Interdisciplinary collaboration (design, QA, programming).",
        ethereal_skill4: "Creativity and autonomy.",
        ethereal_skill5: "Development of new and unfamiliar gameplay features.",
        ethereal_skill6: "Clear communication within a large team."
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
}

window.onload = function () {
  const savedLang = localStorage.getItem("lang") || "fr";
  setLanguage(savedLang);
};

function changeCodeTab(num)
{
  var codelinks = document.getElementsByClassName("code-link");
  var codecontents = document.getElementsByClassName("code-content");

  for(i = 0; i < codelinks.length; i++)
  {
    codelinks[i].className = codelinks[i].className.replace(" active", "");
    codecontents[i].className = codecontents[i].className.replace(" show active", "");
  }
  codelinks[num].className += " active";
  codecontents[num].className += " show active";
}