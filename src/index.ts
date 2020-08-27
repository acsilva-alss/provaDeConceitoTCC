import { Server } from "./server";
import * as dotenv from 'dotenv';

//inside your starter code, do this
dotenv.config();
const server = new Server();
server.listen(Number(process.env.PORT) || 5000);