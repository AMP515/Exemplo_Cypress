import { Given, Then, Before } from "cypress-cucumber-preprocessor/steps";

const url = "https://dota2.fandom.com/wiki/Dota_2_Wiki";

let myBeforeCount = 0;

// This verifies that the hooks work with bundling feature
// https://github.com/TheBrainFamily/cypress-cucumber-preprocessor/pull/234

Given("I kinda open Dota 2 site page", () => {
  cy.visit(url);
});

// This is the same step that we have in socialNetworks/Facebook/different.js, but you don't have to worry about collisions!
Then(`I am very happy`, () => {
  cy.title().should("include", "Dota 2 Wiki");
});
