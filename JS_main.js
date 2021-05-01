/* ----------------------------------------------------------
   Code de démonstration d'une collection d'objet
   David ROUMANET
   28 avril 2021
   ----------------------------------------------------------
*/ 

// Génère une liste de X objets de la classe Score
function CreerXObjects(x) {
    let collection = [];
    for (let t=0; t<x; t++) {
        collection.push(new Score(RandomName(), hasard(1,1000)))
    }
    return collection;
}

// Génère un nom de 3 ou 4 syllabes aléatoirement
function RandomName() {
    let syllabes = ["or","ik","tar","oc","ern","ver","si"];
    let nom = "";
    nbSyllabe = hasard(1,4);
    for (let t=0; t<nbSyllabe; t++) {
        nom = nom + syllabes[hasard(0, syllabes.length)];
    }
    return nom;
}

// fonction de tirage aléatoire entre un min et un max
function hasard(min, max) {
    return Math.floor(Math.random()*(max-min)+min);
}

// affichage d'une collection d'objet Score
function Affichage(collection, emplacement) {
    let codeHTML = ""

    for (unScore of collection) {
        console.log("nom: ",unScore.Nom, "Score: ",unScore.Point);
        codeHTML += `<div class="carte"><b>${unScore.Nom}</b><br>${unScore.Point}<br></div>`;
    }
    if (emplacement != "") {
        document.getElementById(emplacement).innerHTML = codeHTML;
    }
}

// Début du programme
function debutProgram() {
    let lesScores = CreerXObjects(5);

    Affichage(lesScores, "JSplace1");
    console.debug("-- séparation --");
    lesScores.sort((a, b) => b.Point-a.Point);
    Affichage(lesScores, "JSplace2");
}

// Attendre le chargement complet du fichier HTML avant de lancer le code JS
window.onload = function() { debutProgram(); }