import * as http from 'http'; // Node.js Modul
import * as express from 'express'; // Externes Modul (via npm installieren)
import * as path from 'path'; // kommt schon von nodejs
import * as bodyParser from 'body-parser';

export class Server {

    private _port: number;
    private _server: express.Express;

    constructor(port: number) {
        const assetsPath = path.join(__dirname, '..', 'assets');
        this._port = port;
        this._server = express();
        this._server.use('/', express.static(assetsPath));
        this._server.use(bodyParser.json);
        this._server.use(bodyParser.urlencoded);
        this._server.post('/login.html', (req, res, next) => this.handlePostLogin(req, res, next));
        this._server.get('/liste', (req, res, next) => this.handleGetListe(req, res, next));
    }

    public start() {
        this._server.listen(this._port);
        console.log('HTTP server gestertet auf port ' + this._port);
    }

    public get port() {
        return this._port;
    }

    private handleGetListe(req: express.Request, res: express.Response, next: express.NextFunction) {
        // res.send('Guten Abend, Herr Steiner!');
        const filePath = path.join(__dirname, '..', 'assets', 'liste.html');
        console.log(filePath);
        res.sendFile(filePath);
    }

    private handlePostLogin(req: express.Request, res: express.Response, next: express.NextFunction) {
        debugger;
        next;
    }
}
