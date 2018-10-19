import * as http from 'http'; // Node.js Modul
import * as express from 'express';

export class Server {

    private _port: number;
    private _server: express.Express;

    constructor(port: number) {
        this._port = port;
        this._server = express();
    }

    public start() {
        this._server.listen(this._port);
        console.log('HTTP server gestertet auf port ' + this._port);
    }

    public get port() {
        return this._port;
    }

}
