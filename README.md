# Visual Nuts Challenge Project

## Setup

Step by step exemplifying how to run Visual Nuts Challenge REST API

First command to install dependencies

```
yarn --force
```

Second command to run the project

```
yarn dev
```

## Run Tests and Coverage

For run Tests:

```
yarn test
```


For run Coverage:

```
yarn coverage
```

and open file .html in "coverage/lcov-report/index.html"


## Positions Endpoint

```rest
GET /positions/:max_positions
Host: localhost:3333
Content-Type: aplication/json

```

## Countries Endpoint

```rest
GET /countries
Host: localhost:3333
Content-Type: aplication/json

```


## Code Structure

The code of this API follows the following directory pattern:

```
- /
|- src/
|-- database/
|-- modules/
|--- countries/
|---- getCountries/
|----- GetCountriesController.ts
|----- GetCountriesService.ts
|--- positions/
|---- getPositions/
|----- GetPositionsController.ts
|----- GetPositionsService.ts
|-- routes/
|--- index.ts
|--- countries.routes.ts
|--- positions.routes.ts
|-- tests/
|--- unitTest/
|---- positionsService.test.ts
|--- useCases/
|---- story.md
|-- app.ts
|-- server.ts
|- .editorconfig
|- .gitignore
|- package.json
|- tsconfig.json
```

## Developed With

* [TypeScript](https://www.typescriptlang.org/docs/)
* [Express](https://expressjs.com/)

## Autor

* **Alexsandro Carvalho de Freitas**  - [Alexcfreitas](https://github.com/Alexcfreitas)
