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

ajouterCandidats();
ajouterCandidats();
console.log(candidates);
