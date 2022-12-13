import express from "express";
import postOnGameFinishedController from "../controllers/postOnGameFinishedController";


const onGameFinishedRouter = express.Router();
onGameFinishedRouter.route("/").post(postOnGameFinishedController);

export default onGameFinishedRouter;
