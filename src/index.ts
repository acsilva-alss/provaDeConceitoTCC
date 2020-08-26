import { Server } from "./server";
 
const server = new Server();
const port = process.env.PORT;
server.listen(port => {
 console.log(`Server is listening on http://localhost:${port}`);
});