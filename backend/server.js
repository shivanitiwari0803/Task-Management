import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import connectToDB from "./src/config/database.js";


const startServer = async () => {
    await connectToDB();
    app.listen(3000, () => {
        console.log("sever is connected to port:3000");
    });
};

startServer();