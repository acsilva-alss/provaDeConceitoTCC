import { Server } from "./server";
import * as dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(__dirname+'/.env' )});
const server = new Server();
const port = process.env.PORT;
server.listen(port => {
 console.log(`Server is listening on http://localhost:${port}`);
});