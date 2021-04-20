// Les conditions - introduction
// 1. Via un console.log() vérifie l'egalité entre 1 et "1"

//console.log(1 == "1");

// 2. Via un console.log() vérifie l'egalité STRICTE entre 1 et "1"

//console.log(1 === "1");

// 3. Créer un programme qui demande le prénom d'une personne, si le prénom de la personne comporte moins de 5 caractères, affichée une alerte avec comme message " Ton nom est trop court "

//let prénom = prompt("prénom svp?");
//if (prénom.length < 5) {
//    alert("ton prénom est trop court!")
//};

//4. Affiche une addition a l'utilisateur et demande lui de résoudre l'addition, si il répond juste, félicitez le, sinon dite lui que c'est incorrect.

//let score = prompt("6 x 7 = ?");
//if (score == 42) {
//    alert("trop tu connés!")
//}
//else {
//    alert("fuck you m8!")
//};

//5. Affiche une multiplication à l'utilisateur et demande lui de la résoudre, si il répond juste félicitez le "la réponse était bien xx" sinon dite lui, à combien d'unité il était de la réponse exemple si la réponse etait 35 et qu'il répont 40 renvoyez lui une alerte avec "C'est dommage, tu n'étais qu'a 5 unité de la bonne réponse"

// alert("Attention, une question très diffile va arriver, sois vif!");
// let answer = 1936;
// let math = prompt("44 x 44 = ?");
// if (math == 1936) {
//     alert(`la réponse était bien ${answer} !`)
// } else {
//     alert(`C'est dommage, tu n'étais qu'a ${Math.abs(answer - math)} unité de la bonne réponse`)
// };

//6. Créer un programme qui permet d'ajouter des elements dans un tableau via des prompts quand le tableau contient 3 éléments, renvoyez une alerte avec le contenu du tableau

// let tableau = [];

// let choix = prompt("tu peux stocker des bails dans ton coffre, vasy!")
// tableau.push(choix);
// let choix1 = prompt("tu peux encore stocker des bails dans ton coffre, vasy!")
// tableau.push(choix1);
// let choix2 = prompt("tu peux toujours stocker des bails dans ton coffre, vasy!")
// tableau.push(choix2);

// if (tableau.length == 3) {
//     alert(`tu as trois element dans ton coffre: ${choix}, ${choix1}, ${choix2}`)
// };

//7. Créer un programme qui permet a l'utilisateur de mettre des chiffres dans des bacs, si le chiffre est plus grand ou égal à 12 il va dans le bac "grandNombres" si il est plus petit que 12 il va dans le bac "petitNombres" affiche ensuite une seule alerte avec le contenu des deux bacs

let grandNombres = [];
let petitNombres = [];
let chiffre1 = prompt('votre chiffre');
let chiffre2 = prompt('votre chiffre');

if (chiffre1 >= 12 && chiffre2 >= 12) {
    grandNombres.push(chiffre1, chiffre2)
} else if (chiffre1 < 12 && chiffre2 < 12) {
    petitNombres.push(chiffre1, chiffre2)
} else if (chiffre1 >= 12 && chiffre2 < 12) {
    grandNombres.push(chiffre1);
    petitNombres.push(chiffre2)
} else {
    grandNombres.push(chiffre2)
    petitNombres.push(chiffre1)
}

alert(`votre bac contient ${grandNombres} et ${petitNombres}`)

//8. Invente un exercice avec ce que tu as appris en Javascript jusqu'a maintenant en incluent des conditions



