Feature: Business rules
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system

  Background:
    Given navigate to the google
    When enter the coolWinks site link

  Scenario: find products scenario
    Given  user is on coolWinks site
    And  click on sunglasses and select men
    Then add item to the cart
    Then  verify the detail of product in the cart

