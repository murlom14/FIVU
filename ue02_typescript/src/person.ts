export class Person {
    private _vorname: string;
    private _nachmane: string;
    private _geburtsjahr: number;

    // tslint:disable typedef-whitespace
    public constructor(vorname: string, nachname : string, geburtsjahr: number) {
        this._vorname = vorname;
        this._nachmane = nachname;
        this._geburtsjahr = geburtsjahr;
    // tslint:enable typedef-whitespace
    }

    public get vorname(): string {
        return this.vorname;
    }
    public get nachname(): string {
        return this.nachname;
    }
    public get geburtsjahr(): number {
        return this.geburtsjahr;
    }
}
