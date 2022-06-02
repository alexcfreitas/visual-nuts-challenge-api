import { describe, it, before, beforeEach, afterEach } from "mocha";
import { GetPositionsService } from "../../src/modules/positions/getPositions/GetPositionsService";

import { expect } from "chai";
import * as sinon from "sinon";

describe("PositionsService Suite Tests", () => {
  let positionsService: any = {};
  let sandbox: any = {};

  before(() => {
    positionsService = new GetPositionsService();
  });

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should retrive empty array", async () => {
    const data = {
      max_positions: 0,
      numberRuleFirst: 2,
      numberRuleSecond: 5,
      resultRuleFirst: "Visual",
      resultRuleSecond: "Nuts",
    };

    const result = await positionsService.execute(data);
    expect(result).empty;
  });

  it("should retrive same positions asked", async () => {
    const data = {
      max_positions: 30,
      numberRuleFirst: 3,
      numberRuleSecond: 5,
      resultRuleFirst: "Visual",
      resultRuleSecond: "Nuts",
    };

    const result = await positionsService.execute(data);

    expect(result.length).to.be.lte(data.max_positions);
  });

  it("should retrive same positions with Visual and Nuts", async () => {
    const expected = [
      "1",
      "2",
      "Visual",
      "4",
      "Nuts",
      "Visual",
      "7",
      "8",
      "Visual",
      "Nuts",
    ];

    const data = {
      max_positions: 10,
      numberRuleFirst: 3,
      numberRuleSecond: 5,
      resultRuleFirst: "Visual",
      resultRuleSecond: "Nuts",
    };

    const result = await positionsService.execute(data);

    expect(result).to.be.deep.equal(expected);
  });
  it("should retrive 'Visual Nuts' in position 15 because this number is divisible by 3 and 5", async () => {
    const data = {
      max_positions: 30,
      numberRuleFirst: 3,
      numberRuleSecond: 5,
      resultRuleFirst: "Visual",
      resultRuleSecond: "Nuts",
    };

    const result = await positionsService.execute(data);

    expect(result[14]).to.be.deep.equal("Visual Nuts");
  });
});
