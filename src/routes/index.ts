import { Router } from "express";

import { countryRouter } from "./countries.routes";
import { positionRouter } from "./positions.routes";

const router = Router();

router.use("/positions", positionRouter);
router.use("/countries", countryRouter);

export { router };
