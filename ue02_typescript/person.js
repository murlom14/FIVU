export class Person {
    constructor(vorname, nachname, geburtsjahr) {
        this._vorname = vorname;
        this._nachmane = nachname;
        this._geburtsjahr = geburtsjahr;
    }
    get vorname() {
        return this.vorname;
    }
    get nachname() {
        return this.nachname;
    }
    get geburtsjahr() {
        return this.geburtsjahr;
    }
}
