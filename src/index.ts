import { Server } from "./server";
import * as dotenv from 'dotenv';

//inside your starter code, do this
dotenv.config();
const server = new Server();
const port = process.env.PORT;
server.listen(port => {
 console.log(`Server is listening on http://localhost:${port}`);
});