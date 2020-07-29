import express, { Application, IRouter } from 'express';
import socketIO, { Server as SocketIOServer } from 'socket.io';
import { createServer, Server as HTTPServer } from 'http';
import bodyParser from 'body-parser';
import '../DB';

interface IServer {
    route(path: string, route: IRouter): IServer;
    use(something: any):IServer
    statics(path: string): IServer;
    listen(port: number | string, callback: (port: number) => void): IServer;
}


class Server implements IServer {
    private app: Application;
    private readonly httpServer: HTTPServer;
    private io: SocketIOServer;

    private readonly DEFAULT_PORT = 3000;

    constructor( app: Application = express()) {
        this.app = app;
        this.httpServer = createServer(app);
        this.io = socketIO(this.httpServer);

        this.prepareApp();
    }

    private prepareApp(){
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }

    public route(path: string, route: IRouter): IServer {
        this.app.use(path, route);
        return this;
    }

    public statics(path: string): IServer {
        this.app.use(express.static(path));
        return this;
    }

    public listen(port = this.DEFAULT_PORT, callback: (port: number) => void ): IServer {
        this.httpServer.listen(port, () => callback(port));
        return this;
    }

    public use(something: any): IServer {
        this.app.use(something);
        return this;
    }
}


export default Server;
export { IServer };