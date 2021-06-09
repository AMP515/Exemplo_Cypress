import { Given } from "cypress-cucumber-preprocessor/steps";

const url = "https://dota2.fandom.com/wiki/Dota_2_Wiki";

Given(`I open Dota 2 page`, () => {
  cy.visit(url);
});
