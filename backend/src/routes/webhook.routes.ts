import { Router } from "express";
import { verifyWebhook } from "../controllers/webhook.controller";

const router = Router();

router.get("/", verifyWebhook);

export default router;
