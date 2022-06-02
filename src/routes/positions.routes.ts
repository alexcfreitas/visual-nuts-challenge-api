import { Router } from "express";

import { GetPositionsController } from "../modules/positions/getPositions/GetPositionsController";

const positionRouter = Router();
const getPositionsController = new GetPositionsController();

positionRouter.get("/:max_positions", getPositionsController.execute);

export { positionRouter };
