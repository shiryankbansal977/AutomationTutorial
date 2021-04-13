Feature: Business rules
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system


  Scenario: Window Handling
    Given navigate to window page
   Then select a button hotel stay and switch to new tab
    Given fill the required parameters
#      | Destination | check-in data | check-out date | rooms | adults | children |
#      | Mumbai      | 26-3-2021    | 27-3-2021     | 3     | 4      | 2        |
   Given verify the details
