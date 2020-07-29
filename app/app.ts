import dotEnv from 'dotenv';
import Server, { IServer } from './drivers/Server';
import keep from './useCases/Keep';

// environment configuration
dotEnv.config();

// server instance
const server: IServer = new Server();

keep.route(server);

// run server
server.listen(process.env.PORT, (PORT: number) => console.log(`Listening on ${PORT}`));
