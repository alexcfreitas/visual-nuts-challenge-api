import { Router } from "express";

import { GetCountriesController } from "../modules/countries/getCountries/GetCountriesController";

const countryRouter = Router();
const getCountriesController = new GetCountriesController();

countryRouter.get("/", getCountriesController.execute);

export { countryRouter };
