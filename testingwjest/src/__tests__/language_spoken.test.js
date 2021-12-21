import {
  capitalize,
  getAlpha2Code,
  countryExtractor,
  countryListLookup,
  getResponse
} from "../language_spoken.js";

test("convert array of country data objects to array of countries", () => {
  //arrange
  const inputObject = [
    { name: "Argentina", capital: "Buenos Aires" },
    { name: "Belize", capital: "Belmopan" },
    { name: "Bolivia", capital: "Sucre" }
  ]
  const expectedValue = ["Argentina", "Belize", "Bolivia"]

  //act
  const actualValue = countryExtractor(inputObject)

  //assertions

  expect(actualValue).toEqual(expectedValue)

})

// Fix for the Error: Failed to initialize watch plugin "node_modules/jest-watch-typeahead/filename.js":


// yarn add --exact jest-watch-typeahead@0.6.5


