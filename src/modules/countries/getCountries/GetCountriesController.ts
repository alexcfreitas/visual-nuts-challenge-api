import { Request, Response } from "express";

import { GetCountriesService } from "./GetCountriesService";

export class GetCountriesController {
  async execute(request: Request, response: Response) {
    const getCountriesService = new GetCountriesService();

    const countries = await getCountriesService.execute();

    return response.json(countries);
  }
}
