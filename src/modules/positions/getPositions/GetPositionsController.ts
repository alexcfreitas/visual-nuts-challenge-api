import { Request, Response } from "express";
import { GetPositionsService } from "./GetPositionsService";

export class GetPositionsController {
  async execute(request: Request, response: Response) {
    try {
      const { max_positions } = request.params;
      const max = parseInt(max_positions);

      if (!max || max === undefined || max === null || max === 0) {
        return response.status(400).json({
          status: "error",
          message: `Bad Request, Max Positions should be greater than 0 `,
        });
      }

      const getPositionsService = new GetPositionsService();
      const positions = await getPositionsService.execute({
        max_positions: max,
        numberRuleFirst: 3,
        numberRuleSecond: 5,
        resultRuleFirst: "Visual",
        resultRuleSecond: "Nuts",
      });

      return response.json(positions);
    } catch (error: any) {
      return response.status(500).json({
        status: "error",
        message: `Internal Server Error, ${error}`,
      });
    }
  }
}
