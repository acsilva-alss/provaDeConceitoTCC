import express from "express";
import { Server } from "./server";
//import path from "path";
import 'dotenv/config'
const server = new Server();

server.listen(port => {
 console.log(`Server is listening on http://localhost:${port}`);
});