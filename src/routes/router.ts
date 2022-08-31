import { Router } from "express";
import { schemaValidate } from "../middlewares/schemaValidate";
import battleSchema from "../schemas/battleSchema";

const generalRouter = Router();

generalRouter.post("/battle", schemaValidate(battleSchema), compareStars);
generalRouter.get("/ranking", readRanking);

export default generalRouter;