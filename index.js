import express from "express";
import route from "./src/routes";
import dotenv from "dotenv";
import cors from "cors";

const env = dotenv.config().parsed;

const PORT = process.env.PORT || 9999;
const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "25mb" }));

route(app);

app.listen(PORT, () => {
  console.log("App is now running at port ", PORT);
});

async function getRealtime() {
  console.log("masuk realtime");
}
