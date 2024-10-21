Feature: Login to SIGO Platform

  Scenario: Successful login with valid credentials
    Given I am on the SIGO login page
    When I enter valid username and password
    And I click the login button
    Then I should be logged in successfully