import { Router } from "express";

const generalRouter = Router();


generalRouter.post("/battle", schemaValidate(battleSchema), compareStars);
generalRouter.get("/ranking", schemaValidate(rankingSchema), readRanking);

export default generalRouter;