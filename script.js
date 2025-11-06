const translations = 
{
  fr: {
        job_title: "Programmeur Jouabilité",
        main_page_title: "Projets",

        //Discount Delirium
        discount_desc1: "Discount Delirium est un jeu étudiant fait par 4 personnes sur Unity. Le jeu est dans un contexte de Black Friday et le joueur joue un client qui cherche à profiter au maximum des rabais. Par contre, le joueur devra surveiller les autres clients tous aussi frénétiques lors de l'événement. Le joueur devra acheter le plus d'objets possible dans ce chaos avant la fin du temps. Ce qui donnera un plus gros score et plus de points pour acheter des améliorations sur le panier que ce soit des meilleurs contrôles, une vitesse améliorée ou des armes plus efficaces.",
        discount_title1: "Ce que j'ai fait :",
        discount_title2: "Les Armes",
        discount_desc2: "Le joueur a deux armes en sa possession: Une arme de mêlée et une arme à distance. L'arme de mêlée va pouvoir frapper les clients pour leur voler leur objet de leur panier. Plus on augmente l'arme, plus vite il aura et plus d'objets il volera. L'arme à distance est un lance-patate. Lorsque la patate touche un client, il sera ralenti, ce qui peut rendre plus facile l'attaque au corps à corps ou une cible parfaite pour lui rentrer en collision comme un train. L'arme à distance utilise un pool de munition au lieu de créer un projectile à chaque fois. Quand le joueur améliore l'arme à distance, il augmente la vitesse et la distance du projectile.",
        discount_title3: "Le menu/navigation",
        discount_desc3: "La navigation est possible grâce à un curseur virtuel lorsqu'on joue avec une manette. Elle disparaît lorsqu'on prend le clavier et réapparaît quand on prend la manette. On peut afficher aller modifier le son du jeu, afficher le tableau de score, faire les améliorations dans le jeu, etc. La gestion de montrer et enlever le curseur est gérée par le GameManager. ",
        discount_title4: "Le GameManager",
        discount_desc4: "Le GameManager gère les transitions d'état de jeu. Par exemple, de donner les contrôles au joueur quand le décompte est fini, d'arrêter la partie quand je joueur se met en pause, d'afficher le score quand la partie se termine, etc. Le GameManager et les états du jeu sont programmés avec une Finite State Machine. Cela permet un meilleur contrôle du jeu et permet d'avoir un code plus clair. De plus, j'utilise le design pattern de l'Observer, qui permet de faire des appels sans avoir besoin d'une référence à un objet. ",
        discount_desc5: "Voici un apercu du jeux avec les améliorations",

        //Rush Rumble
        rush_decs1: "Rush Rumble est un jeu multijoueur dans le style de Wipeout et Fall Guys. Une équipe de coureurs doit atteindre un point de contrôle pour marquer des points, tandis que l'équipe des maîtres du jeu doit tenter de les arrêter, de les ralentir ou de les faire tomber pour les empêcher d'atteindre le point de contrôle. Les coureurs disposent d'un temps limité qui se réinitialise au point de contrôle ; s'ils n'y parviennent pas, c'est un point pour les maîtres du jeu. La première équipe à atteindre 10 points remporte la partie. Ce jeu a été créé par quatre étudiants dans le cadre d'un projet scolaire, avec Unity et Mirror. Les équipes s'affrontent dans une arène colorée, remplie de pièges et d'obstacles qui mettront à l'épreuve les compétences des coureurs",
        rush_title1: "Ce que j'ai fait :",
        rush_title1: "Finite State Machine",
        rush_desc2: "Mon travail consistait principalement à créer le contrôleur du personnage principal, le coureur. C'était un élément essentiel pour que le gameplay en 3D soit vraiment agréable. Il a été développé à l'aide d'une machine à états finis. J'ai également travaillé sur les bonus avec un coéquipier. J'ai créé le bonus d'invisibilité : le coureur peut se voir lui-même, mais pas les autres.",

        //Ethereal Estate
        ethereal_decs1: "Ethereal Estate est un jeu développé par 34 étudiants dans le cadre d’un projet finissant d'un BAC en création de jeux vidéo. Le jeu est sorti le 12 mars 2021 gratuitement sur Steam. C’est un jeu bac à sable physic base dans lequel on incarne un fantôme et dont l’objectif est de mettre le bordel dans le manoir d’une famille.",
        ethereal_title1: "Mon implication dans ce projet",
        ethereal_title2: "Programmation",
        ethereal_decs2: "Dans ce projet, j’étais dans l’équipe de programmation. J’étais chargé de programmer la majorité des objets dans l’environnement du jeu(props).  M’assurer que le joueur puisse prendre l’objet et qu’il puisse interagir avec d'autres objets dans certain cas et implémenter quelques fonctionnalités particulières selon ce que les designers système avaient décidé. J'ai ajouter des Physics Constraints pour des meubles avec des portes ou des tiroirs. Vers la fin du projet, notre équipe était dans la correction de bug trouvé pendant les playtests et par l’équipe d’assurance-qualité. ",
        ethereal_title3: "Équipe Marketing",
        ethereal_decs3: "De plus, j’ai choisi d’être dans l’équipe de marketing. Ma tâche avec une collègue a été d’élaborer le trailer du jeu. J’ai fait du scénarimage, de la capture vidéo du jeu et le montage du trailer.",
        ethereal_title4: "Mon apprentissage et mon expérience dans le projet",
        ethereal_decs4: "Ce projet m’a permis d’apprendre beaucoup de choses et d’avoir une expérience unique dans une grande équipe. Par exemple:",
        
        ethereal_list1: "D’être organisé",
        ethereal_list2: "Faire un suivi de mes tâches et de mon calendrier de développement ",
        ethereal_list3: "De trouver des solutions pour des problèmes",
        ethereal_list4: "D'user de ma créativité et de ma débrouillardise pour arriver à mes fins",
        ethereal_list5: "De communiquer et travailler étroitement avec mes collègues et ceux de design système",
        ethereal_list6: "Réaliser des fonctionnalités que je n’avais jamais fait auparavant",
  },

  en: {
        job_title: "Gameplay Programmer",
        main_page_title: "Projects",

        //Discount Delirium
        discount_desc1: "Discount Delirium is a student game made by 4 people on Unity. The game takes place during Black Friday, and the player plays a shopper trying to take full advantage of the discounts. However, the player must keep an eye on the other equally frantic shoppers during the event. The goal is to buy as many items as possible amidst the chaos before time runs out. This will earn them a higher score and more points to purchase upgrades from their cart, such as improved controls, increased speed, or more effective weapons.",
        discount_title1: "What I did :",
        discount_title2: "Weapons",
        discount_desc2: "The player has two weapons: a melee weapon and a ranged weapon. The melee weapon can be used to attack customers and steal items from their shopping carts. The more the weapon is upgraded, the faster the player will attack and the more items they can steal. The ranged weapon is a potato launcher. When the potato hits a customer, they will be slowed down, making them easier to attack in melee or a perfect target for a collision, like a train. The ranged weapon uses a pool of ammunition instead of creating a new projectile each time. When the player upgrades the ranged weapon, they increase the speed and range of the projectile.",
        discount_title3: "The menu/navigation",
        discount_desc3: "Navigation is possible using a virtual cursor when playing with a controller. It disappears when using the keyboard and reappears when using the controller. You can use it to adjust the game's sound, view the scoreboard, make in-game upgrades, and more. Showing and hiding the cursor is managed by the GameManager.",
        discount_title4: "GameManager",
        discount_desc4: "The GameManager handles game state transitions. For example, it grants control to the player when the countdown finishes, stops the game when the player pauses, displays the score when the game ends, and so on. The GameManager and game states are programmed using a Finite State Machine. This allows for better game control and cleaner code. Furthermore, I use the Observer design pattern, which allows calls to the GameManager without requiring an object reference.",
        discount_desc5: "Here's a preview of the game with the improvements.",

        //Rush Rumble
        rush_decs1: "Rush Rumble is a multiplayer game in the style of Wipeout and Fall Guys. A team of runner must run towards the checkpoint to make a point while the team of game master must try to stop them, slow them or make them fall so they can't reach it. The runners have a time limit that reset on the checkpoint, if they can't make it, its a point for the game masters. First team to achieve 10 points win. Its a game made by 4 students as a school project with Unity and Mirror. The teams competes in a colorful arena full of traps and obstacles that will test the skills of the runners",
        rush_title1: "What I did :",
        rush_title1: "Finite State Machine",
        rush_desc2: "My work was mainly to make the character controller for the runner It was a major part for this game to make the 3C feel really good. It was made with an Finite State Machine. I also worked on the power ups with a teammate. I made the invisibility power up so the runner can see himself but not the rest. ",

        //Ethereal Estate
        ethereal_decs1: "Ethereal Estate is a game developed by 34 students as part of a final project for a Bachelor’s degree in video game creation. The game was released for free on Steam on March 12, 2021. It’s a physics-based sandbox game where you play as a ghost whose goal is to cause chaos in a family’s mansion.",
        ethereal_title1: "My involvement in this project",
        ethereal_title2: "Programming",
        ethereal_decs2: "In this project, I was part of the programming team. I was responsible for programming most of the objects in the game environment (props). I ensured that the player could pick up objects and interact with others in certain cases, and I implemented specific features as determined by the system design team. I also added Physics Constraints for furniture with doors or drawers. Toward the end of the project, our team focused on fixing bugs found during playtests and by the quality assurance team.",
        ethereal_title3: "Marketing Team",
        ethereal_decs3: "Additionally, I chose to be part of the marketing team. My task, along with a colleague, was to create the game’s trailer. I worked on storyboarding, gameplay video capture, and trailer editing.",
        ethereal_title4: "My learning and experience from the project",
        ethereal_decs4: "This project allowed me to learn a lot and gain a unique experience working in a large team. For example:",
        ethereal_list1: "Being organized",
        ethereal_list2: "Tracking my tasks and development schedule",
        ethereal_list3: "Finding solutions to problems",
        ethereal_list4: "Using creativity and resourcefulness to achieve my goals",
        ethereal_list5: "Communicating and working closely with my teammates and the system design team",
        ethereal_list6: "Implementing features I had never done before"
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
  //console.log("Changed language " + lang);
}

/*window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "fr";
  setLanguage(savedLang);
});*/

window.onload = function () {
  const savedLang = localStorage.getItem("lang") || "fr";
  setLanguage(savedLang);
};