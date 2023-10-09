Feature: Search

  Scenario: Performing a successful search for a product
    Given I am on the Voila.id home page
    When I click the "Search" icon
    And I type search input field with the query "hermes"
    Then I should see a list of search results
    And each result should contain the word "hermes"

  Scenario: Verifying search results pagination
    Given I am on the Voila.id search input field with the query "hermes"
    When I click the "Search" button or press Enter
    Then I should see a list of search results
    And I should see load more animation at the bottom of the results
    When I scroll at the bottom of te page
    Then I should see the next set of search results

  Scenario: Clearing the search query
    Given I am on the Voila.id search input field with the query "hermes"
    When I click the "X" button in the search input field
    Then the search query should be cleared
    And I should see no search results

  Scenario: Refining search results with filters
    Given I am on the Voila.id search input field with the query "hermes"
    When I apply a filter, such as "Brand: Hermes"
    Then I should see refined search results that match the filter criteria
    And the results should only include products from the brand "Hermes"

  Scenario: Sorting search results
    Given I am on the Voila.id search page with the query "hermes"
    When I select a sorting option, such as "Price: Low to High"
    Then the search results should be sorted accordingly
    And the first result should have the lowest price

  Scenario: No results found for an invalid search query
    Given I am on the Voila.id search input field with an invalid query
    When I click the "Search" button or press Enter
    Then I should see a message indicating that no results were found
    And there should be suggestions or recommendations for valid search queries

  Scenario: Auto suggestions are displayed while typing
    Given I am on the Voila.id search input field
    When I start typing a search query, such as "herm"
    Then I should see auto suggestions that match my input
    And I should be able to select one of the suggestions to perform the search

  Scenario: Clicking on a search result
    Given I am on the Voila.id search input field with the query "hermes"
    When I click on one of the search results
    Then I should be redirected to the product page for the selected item
    And I should see detailed information about the product

