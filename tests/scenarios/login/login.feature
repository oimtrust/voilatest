Feature: Login to Web App

  Scenario: Validate the login page is displayed when click profile icon from navbar menu
    Given Open the webpage
    When Click the profile icon
    Then The login page is displayed

  Scenario: Ensure the error message is displayed when username and password empty
    Given Open the webpage
    When Click the profile icon
    Then The login page is displayed
    And Click the login button
    Then Error message is displayed for empty state

  Scenario: Ensure the error message is displayed when username and password invalid
    Given Open the webpage
    When Click the profile icon
    Then The login page is displayed
    When Input email field with invalid username
    And Input password field with invalid password
    And Click the login button
    Then Error message is displayed for invalid state

  Scenario: Successfully logged in using valid account
    Given Open the webpage
    When Click the profile icon
    Then The login page is displayed
    When Input email field with valid username
    And Input password field with valid password
    And Click the login button
    Then Name of user is visible in navbar menu