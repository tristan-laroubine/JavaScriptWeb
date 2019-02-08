( function () {
    "use strict";
    function Identite(a_nom, a_prenom) {
        this.nom = a_nom;
        this.prenom = a_prenom;
        this.nomcomplet = this.prenom + " " + this.nom;

    }
    var oo = new Identite('pons', 'olivier');
    console.log(oo.nomcomplet);
})();

