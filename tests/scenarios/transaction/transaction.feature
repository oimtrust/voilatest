Feature: Create the transaction

  Scenario: Successfully click detail product by search field
    Given User click search icon
    When User type "Ring" in search field
    And Click the product with "Ring" as a keyword
    Then User able to show the detail of the product

#  Scenario: Ensure the error message is displayed when user click "Add to Bag" without select the variant
#    Given User click search icon
#    When User type "Ring" in search field
#    And Click the product with "Ring" as a keyword
#    And Click "Add to Bag" button
#    Then When the variant is not chosen, an error message is displayed.
#
#  Scenario: Successfully added to bag the product has been chosen
#    Given User click search icon
#    When User type "Ring" in search field
#    And Click the product with "Ring" as a keyword
#    And Click "L" variant
#    And Click "Add to Bag" button
#    Then The success message is displayed when the product able to added
#    When Click "Go to Shopping Bag"
#    And Delete the list of product in cart
#    Then The wording of "Your shopping bag is empty" is displayed
