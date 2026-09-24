// Gestion des Élections et Listes Électorales au Maroc

const prompt = require("prompt-sync")();

// Data

const candidates = [];

// Linear search function

function linearSearch(cin) {
    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].cin === cin) {
            return candidates[i];
        }
    }
    return (-1);
}

// Ajouter un condidat

function ajouterCandidats() {
    const cin = prompt("Entrer la CIN : ");

    // check if candidat deja exist
    const candidatDejaExist = linearSearch(cin);

    if (candidatDejaExist !== -1) {
        console.log("Erreur: cette candidat déja existe.")
        return;
    }
    const nom = prompt("Entrer le nom : ");
    const prenom = prompt("Entrer le prénom : ");
    const partiPolitique = prompt("Entrer le parti politique : ");
    const age = Number(prompt("Entrer L'âge' : "));

    // condidat object

    const candidat = {
        cin: cin,
        nom: nom,
        prenom: prenom,
        partiPolitique: partiPolitique,
        age: age,
        electeurs: [],
    };

    // push condidat in condidats array

    candidates.push(candidat);

    // success message

    console.log("Candidat ajouté avec succès.");
}

// Ajouter plusieurs candidats à la fois.

function ajouterPlusieursCandidats() {
    // ask user to enter the nombre of candidats
    console.log();
    const nombre = Number(prompt("Combien de candidats souhaitez-vous ajouter ? : "));

    for (let i = 0; i < nombre; i++) {
        console.log();
        console.log(`--- Candidat numéro: ${i + 1} ---`);

        ajouterCandidats();
    }
}

// menu principale

function afficherMenu() {
    console.log();
    console.log(`=================================
GESTION DES ÉLECTIONS
=================================
1. Ajouter un candidat
2. Ajouter plusieurs candidats
3. Afficher la list des candidats
4. Voter pour un candidat
5. Modifier les informations d'un candidat
6. Supprimer un candidat
7. Rechercher des candidats 
8. Statistiques de l'élection
0. Quitter`);

    console.log();

    const choix = Number(prompt("Votre choix : "));
    return (choix);
}

function controlMenu() {
    let choix;

    while (choix !== 0) {
        choix = afficherMenu();

        switch (choix) {
            case 1:
                ajouterCandidats();
                break;

            case 2:
                ajouterPlusieursCandidats();
                break;

            case 0:
                console.log("Au revoir.");
                break;

            default:
                console.log("Choix invalide.");
        }
    }


}

controlMenu()