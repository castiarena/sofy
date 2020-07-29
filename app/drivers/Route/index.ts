import { Router, IRouter, RequestHandler } from 'express';
import { IServer } from '../Server';

class Route {
    private router: IRouter;
    private path: string;
    constructor(path ?: string){
        this.path = path;
        this.router = Router();
    }

    public get(path: string, handler: RequestHandler):Route {
        this.router.get(path, handler);
        return this;
    }

    public post(path: string, handler: RequestHandler): Route{
        this.router.post(path, handler);
        return this;
    }

    public route(server: IServer){
        server.route(this.path, this.router);
    }
}

export default Route;