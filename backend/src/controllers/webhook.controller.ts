import { Request, Response } from "express";
import { env } from "../config/env";

export const verifyWebhook = (req: Request, res: Response): void => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode === "subscribe" && token === env.VERIFY_TOKEN) {
    console.log("✅ Webhook Verified");

    res.status(200).send(challenge);
    return;
  }

  res.sendStatus(403);
};
