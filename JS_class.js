class Score {
    #nom="";            // attribut
    #point=0;           // attribut

    // Construction de la classe
    constructor(nom, point) {
        this.#nom = nom;
        this.#point = point;
    }

    // méthode sur le nom (notez la différence entre 'n'om et 'N'om)
    get Nom() {
        return this.#nom;
    }
    set Nom(nouveauNom) {
        this.#nom = nouveauNom;
    }

    // méthode sur le  point (idem : Point devient une propriété, point est un attribut)
    get Point() {
        return this.#point;
    }
    set Point(nouveauPoint) {
        this.#point = nouveauPoint;
    }
}