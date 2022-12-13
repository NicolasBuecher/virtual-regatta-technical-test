import { Request, Response } from "express";
import parseGame from "./parseGame/parseGame";


function postOnGameFinishedController(req: Request, res: Response) {
  if (!req.body.game) {
    res.status(400).json({
      message: "No game string in body",
    });
  }

  try {
    const game = parseGame(req.body.game);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
    return;
  }

  res.status(200).json({
    message: "OK",
  });
}

export default postOnGameFinishedController;
