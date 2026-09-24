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
    console.log();
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
        console.log();

        ajouterCandidats();
    }
}

//  Afficher la liste des candidats.

function afficherLesCandidats() {
    if (candidates.length === 0) {
        console.log("Aucun candidat enregistré.");
        return;
    }

    console.log();
    console.log("Voici les candidats enregistré.")
    console.log();

    for (let i = 0; i < candidates.length; i++) {
        const candidat = candidates[i];

        console.log(`=================================
Candidat ${i + 1}
=================================
CIN : ${candidat.cin}
Nom : ${candidat.nom}
Prénom : ${candidat.prenom}
Parti politique : ${candidat.partiPolitique}
Âge : ${candidat.age}
Nombre de votes : ${candidat.electeurs.length}
=================================`)
    }
    console.log();
}

// Afficher candidats par nombre de votes

function afficherCandidatsParNombreDeVotes() {
    if (candidates.length === 0) {
        console.log("Aucun candidat enregistré.");
        return;
    }

    // Save original array in another array

    const sortedCandidates = [];

    for (let i = 0; i < candidates.length; i++) {
        sortedCandidates.push(candidates[i]);
    }

    // bubble sort

    for (let i = 0; i < sortedCandidates.length - 1; i++) {
        for (let j = 0; j < sortedCandidates.length - i - 1; j++) {
            if (sortedCandidates[j].electeurs.length < sortedCandidates[j + 1].electeurs.length) {
                const swap = sortedCandidates[j];
                sortedCandidates[j] = sortedCandidates[j + 1];
                sortedCandidates[j + 1] = swap;
            }
        }

    }

    // affichage le candidats par nombre de Votes

    console.log();
    console.log("--- CANDIDATS PAR NOMBRE DE VOTES ---");

    // loop through candidates and their properties

    for (let i = 0; i < sortedCandidates.length; i++) {
        const candidat = sortedCandidates[i];

        console.log(`=================================
Candidat ${i + 1}
=================================
CIN : ${candidat.cin}
Nom : ${candidat.nom}
Prénom : ${candidat.prenom}
Parti politique : ${candidat.partiPolitique}
Âge : ${candidat.age}
Nombre de votes : ${candidat.electeurs.length}
=================================`);
    }
}

// Afficher les candidats d'un parti politique spécifique

function afficherCandidatsParPartiPolitique()
{
    // ask user to enter their parti politique
    const parti = prompt("Entrer le parti politique : ");

    // search for  candidat par parti politique

    let found = 0;

    console.log(`--- CANDIDATS DU PARTI POLITIQUE : ${parti} ---`);

    for (let i = 0; i < candidates.length; i++)
    {
        if (candidates[i].partiPolitique === parti)
        {
            const candidat = candidates[i];

            // affiche

            console.log(`=================================
Candidat ${i + 1}
=================================
CIN : ${candidat.cin}
Nom : ${candidat.nom}
Prénom : ${candidat.prenom}
Parti politique : ${candidat.partiPolitique}
Âge : ${candidat.age}
Nombre de votes : ${candidat.electeurs.length}
=================================`);

                found = 1;
        }
    }

    if (found === 0)
    {
        console.log("Aucun candidat trouvé pour ce parti. ");
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
4. Afficher candidats par nombre de votes
5. Afficher les candidats d'un parti politique spécifique
6. Voter pour un candidat
7. Modifier les informations d'un candidat
8. Supprimer un candidat
9. Rechercher des candidats 
10. Statistiques de l'élection
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

            case 3:
                afficherLesCandidats();
                break;

            case 4:
                afficherCandidatsParNombreDeVotes();
                break;
            
            case 5:
                afficherCandidatsParPartiPolitique();
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