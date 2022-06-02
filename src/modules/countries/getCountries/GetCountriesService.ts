import WORLD from "../../../database/countriesData.json";

export class GetCountriesService {
  constructor() {}

  async countAll() {
    return WORLD.length;
  }

  async findCountryMostLanguagesByLanguage(language: string) {
    const getCountryWithMostLanguages = (
      arr: any[],
      getLengthFunction: {
        (country: { languages: string | any[] }): number;
        (arg0: any): number;
      }
    ) => {
      let max = Math.max(...arr.map(getLengthFunction));
      return arr.filter(
        (item) =>
          getLengthFunction(item) === max &&
          item.languages.includes(language.toLowerCase())
      );
    };

    let country = await getCountryWithMostLanguages(
      WORLD,
      (country: { languages: string | any[] }) => country.languages.length
    );

    return country.map((country) => country.country)[0];
  }

  async countLanguagesByCountry() {
    return WORLD.map((country) => {
      return {
        country: country.country,
        languages: country.languages.length,
      };
    });
  }

  async getCountryWithHighestLanguages() {
    const maxByHighest = (
      arr: any[],
      getLengthFunction: { (country: any): any; (arg0: any): number }
    ) => {
      const max = Math.max(...arr.map(getLengthFunction));
      return arr.find((item) => getLengthFunction(item) === max);
    };

    let getHighestCountry = maxByHighest(
      WORLD,
      (country) => country.languages.length
    );
    return getHighestCountry.country;
  }

  async getMostCommonOfficialLanguagesEachCountry() {
    const maxByFrequency = (
      arr: any[],
      getLengthFunction: { (language: any): any; (arg0: any): number }
    ) => {
      const max = Math.max(...arr.map(getLengthFunction));
      return arr.filter((item) => getLengthFunction(item) === max);
    };

    let mostCommonLanguage = (world: { languages: any }[]) => {
      let allLanguages: any[] = [];
      world.map((country: { languages: any }) =>
        [...country.languages].map((languageItem) =>
          allLanguages.push(languageItem)
        )
      );
      let frequencyLanguages = allLanguages.reduce(
        (result, currentLanguage) => {
          result[currentLanguage]
            ? result[currentLanguage]++
            : (result[currentLanguage] = 1);
          return result;
        },
        {}
      );

      let transformToArrayFrequency = Object.keys(frequencyLanguages).map(
        (key) => {
          return { language: key, frequency: frequencyLanguages[key] };
        }
      );

      let getMaxFrequency = maxByFrequency(
        transformToArrayFrequency,
        (language) => language.frequency
      );

      return getMaxFrequency.map((item) => {
        return {
          language: item.language,
          frequency: item.frequency,
        };
      });
    };
    return mostCommonLanguage(WORLD);
  }

  async execute() {
    try {
      if (!WORLD) {
        throw new Error("Bad Request");
      }

      const totalOfCountries = await this.countAll();
      const theCountryWithMostOfficialLanguagesInGerman =
        await this.findCountryMostLanguagesByLanguage("de");
      const totalOfLanguagesByCountry = await this.countLanguagesByCountry();
      const theCountryWithMostOfficialLanguages =
        await this.getCountryWithHighestLanguages();
      const theOfficialLanguagesMostCommon =
        await this.getMostCommonOfficialLanguagesEachCountry();

      return {
        totalOfCountries,
        theCountryWithMostOfficialLanguagesInGerman,
        totalOfLanguagesByCountry,
        theCountryWithMostOfficialLanguages,
        theOfficialLanguagesMostCommon,
      };
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
