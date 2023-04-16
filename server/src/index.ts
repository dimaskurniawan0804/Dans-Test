import express, { Express } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/RUsers";
import router from "./routes";
import { json } from "body-parser";
import { connectToDatabase } from "./config/setup";
import cors from "cors";
import { getJobByQuery } from "./models/MJob";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(json());

connectToDatabase().then(() => {
  getJobByQuery();
});

app.use("/", router);
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
