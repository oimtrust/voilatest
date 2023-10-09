Feature: Login

  Scenario: Successful login with valid credentials
    Given I am on the Voila.id login page
    When I enter my valid username "yourmail@gmail.com" and valid password "yourpassword"
    And I click the "Login" button
    Then I should be redirected to the Voila.id dashboard
    And I should see a firstname in navbar menu

  Scenario: Unsuccessful login with invalid credentials
    Given I am on the Voila.id login page
    When I enter my invalid username "invalid_username@gmail.com" and invalid password "invalid_password"
    And I click the "Login" button
    Then I should see an error message indicating login failure

  Scenario: Ensure the error message is displayed when username and password empty
    Given I am on the Voila.id login page
    And I click the "Login" button
    Then I should see an error message indicating login failure

  Scenario: Forgot Password link functionality
    Given I am on the Voila.id login page
    When I click the "Forgot Password" link
    Then I should be redirected to the password reset page
    And I should see a form to enter my email

  Scenario: Successful password reset
    Given I am on the password reset page
    When I enter my registered email address
    And I click the "Reset Password" button
    Then I should receive an email with instructions for password reset

  Scenario: Unsuccessful password reset with invalid email
    Given I am on the password reset page
    When I enter an invalid email address
    And I click the "Reset Password" button
    Then I should see an error message indicating an invalid email

  Scenario: Logout from Voila.id account
    Given I am logged in to my Voila.id account
    When I click the "Logout" button
    Then I should be logged out and redirected to the home page