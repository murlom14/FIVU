import * as http from 'http'; // Node.js Modul
import * as express from 'express'; // Externes Modul (via npm installieren)
import * as path from 'path'; // kommt schon von nodejs

export class Server {

    private _port: number;
    private _server: express.Express;

    constructor(port: number) {
        const assetsPath = path.join(__dirname, '..', 'assets');
        this._port = port;
        this._server = express();
        this._server.use('/public', express.static(assetsPath));
        this._server.get('/liste', (req, res, next) => this.handleGetListe(req, res, next));

        this._server.get('/image.png', (req, res, next) => this.sendImage(res));
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

    private sendImage(res: express.Response) {
        const filePath = path.join(__dirname, '..', 'assets', 'image.png');
        res.sendFile(filePath);
    }

}
