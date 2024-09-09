import express, { type Response } from "express";
import { nanoid } from "nanoid";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
    res.send(nanoid(32));
});

app.listen(3000, () => {
    console.log("Hello World");
    console.log("Server is running on port 3000");
});