import { Request, Response } from "express";
import getGameResult from "./getGameResult/getGameResult";
import parseGame from "./parseGame/parseGame";


function postOnGameFinishedController(req: Request, res: Response) {
  if (!req.body.game) {
    res.status(400).json({
      message: "No game string in body",
    });
  }

  try {
    const game = parseGame(req.body.game);

    const result = getGameResult(game);

    // TODO: stringify result
    res.status(200).json({
      message: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
}

export default postOnGameFinishedController;
