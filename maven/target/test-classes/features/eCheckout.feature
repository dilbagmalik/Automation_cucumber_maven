Feature: Search product Add to cart and Go to Checkout page

Scenario: Search product
Given I search product
When I enter search criteria
Then product should display


Scenario: Click on Product and Add to Cart
Given I choose pruduct
When Add to cart
Then product added to Cart

Scenario: Go to Checkout page 
Given I click on ProceedToCheckoutbtn
Then Product summary should display