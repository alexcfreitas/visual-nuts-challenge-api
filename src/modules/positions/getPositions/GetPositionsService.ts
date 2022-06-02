interface IRequest {
  max_positions: number;
  numberRuleFirst: number;
  numberRuleSecond: number;
  resultRuleFirst: string;
  resultRuleSecond: string;
}

export class GetPositionsService {
  constructor() {}

  async execute({
    max_positions,
    numberRuleFirst,
    numberRuleSecond,
    resultRuleFirst,
    resultRuleSecond,
  }: IRequest) {
    try {
      const generateArrayByRules = (position: number) => {
        const arrayPositionGenerated =
          position % numberRuleFirst === 0 && position % numberRuleSecond === 0
            ? `${resultRuleFirst} ${resultRuleSecond}`
            : position % numberRuleFirst === 0
            ? `${resultRuleFirst}`
            : position % numberRuleSecond === 0
            ? `${resultRuleSecond}`
            : `${position}`;
        return arrayPositionGenerated;
      };

      const visualNutsGenerator = (range: number) => {
        return [...Array(range)].map((element, pos) =>
          generateArrayByRules(++pos)
        );
      };

      return visualNutsGenerator(max_positions);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
