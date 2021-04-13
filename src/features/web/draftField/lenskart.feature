Feature: Business rules
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system

  @working
  Scenario: lenskart shop scenario
    Given  navigate to lenskart Page
    Then   select the product
    Then   add product on cart
    Then   verify value added in cart
    Then   verify the details of product
