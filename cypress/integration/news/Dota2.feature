Feature: The Dota 2 site

  I want to open Dota 2 site page

  Scenario: Opening a Dota 2 site page
    Given I open Dota 2 page
    Then I see "Dota 2 Wiki" in the title

  Scenario: Different kind of opening
    Given I kinda open Dota 2 site page
    Then I am very happy
