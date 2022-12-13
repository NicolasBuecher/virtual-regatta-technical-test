import express from "express";
import onGameFinishedRouter from "./routes/onGameFinishedRouter";


const DEFAULT_PORT = 5000;

const port = process.env.PORT || DEFAULT_PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/on-game-finished", onGameFinishedRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
