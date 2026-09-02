const excuses = {
  coup: [
    "La balle et ma raquette avaient visiblement des projets différents.",
    "J’ai tenté un coup avancé. Très avancé. Peut-être trop avancé.",
    "Mon cerveau a dit « doucement », mais mon bras n’a pas reçu le message.",
    "Le filet avait l’air seul, alors je lui ai offert la balle.",
    "J’étais parfaitement placé… pour le coup d’après.",
    "Ma technique a pris une petite pause sans prévenir.",
    "J’ai regardé la cible avant de finir de regarder la balle.",
    "C’était un excellent échauffement pour mon prochain essai.",
    "J’ai découvert une nouvelle trajectoire. Elle n’était simplement pas utile.",
    "Mon enthousiasme a dépassé mon contrôle de quelques centimètres."
  ],
  partie: [
    "J’ai surtout gagné une excellente occasion de progresser.",
    "Mon plan de match était solide, mais il est arrivé après la partie.",
    "J’ai économisé ma victoire pour une occasion spéciale.",
    "Aujourd’hui, mon meilleur coup était probablement le tirage au sort.",
    "J’ai testé plusieurs stratégies. La bonne sera pour la prochaine fois.",
    "Mon esprit de compétition était là; mes points cherchaient encore le terrain.",
    "J’ai donné un cours magistral sur la résilience.",
    "La victoire n’était pas au programme, mais le plaisir, oui.",
    "J’ai préféré garder un peu de suspense pour notre prochaine rencontre.",
    "Disons que ma courbe de progression vient de gagner beaucoup de potentiel."
  ]
};

const zoneExcuse = document.querySelector("#excuse");
const boutons = document.querySelectorAll("[data-categorie]");

function choisirExcuse(categorie) {
  const liste = excuses[categorie];
  const position = Math.floor(Math.random() * liste.length);
  zoneExcuse.textContent = liste[position];
}

boutons.forEach(function (bouton) {
  bouton.addEventListener("click", function () {
    choisirExcuse(bouton.dataset.categorie);
  });
});
