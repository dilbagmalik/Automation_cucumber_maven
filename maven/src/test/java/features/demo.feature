Feature: Login functionality feature
To make sure Login functionality works
Run cucucmber test to verify it is working

Scenario: Test Login functionality
Given I Open URL
When I clicks on sign in link 
Then login page should open

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