import { Request, Response } from "express";


function postOnGameFinishedController(req: Request, res: Response) {
  res.status(200).json({
    message: "OK",
  });
}

export default postOnGameFinishedController;
