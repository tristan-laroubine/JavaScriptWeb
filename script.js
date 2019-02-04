let o = {
    titre:"Le chien des Baskerville",
    publication:1902,
    auteur:{
        civilite:"Sir",
        nom:"Doyle",
        prenom: "Arthur Conan"
    }
};
//  27/92
console.log(o.titre + '(' + o.auteur.civilite + ' ' + o.auteur.prenom + o.auteur.nom + ')');

console.log(o["titre"] + '(' + o["auteur"]["civilite"] + ' ' + o["auteur"]["prenom"] + o["auteur"]["nom"] + ')');


//  28/92
for (let i in o)
{
    console.log(o[i]);
}

//  32/92
var sum = function(a,b) { return a+b; }
var add = sum;

delete sum;
console.log(typeof add);

