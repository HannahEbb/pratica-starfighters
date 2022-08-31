import {Router} from 'express';
import generalRouter from "./router";

const router = Router();

router.use(generalRouter);

export default router;