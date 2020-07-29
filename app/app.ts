import dotEnv from 'dotenv';
import Server, { IServer } from './drivers/Server';
import Routes from './drivers/Route';

// environment configuration
dotEnv.config();

// server instance
const server: IServer = new Server();

// create routes
const homeRoute = new Routes('/');

// attach handlers
homeRoute.get('/', (req, res) => {
    res.json({ status: 'otra cosa'});
}).route(server);

// attach handlers
homeRoute.post('/pepe', (req, res) => {
    res.json({ body: req.body });
}).route(server);



// run server
server.listen(process.env.PORT, 
    (PORT: number) => console.log(`Listening on ${ PORT }`)
);
