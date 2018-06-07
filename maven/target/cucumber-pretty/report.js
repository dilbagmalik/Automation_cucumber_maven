$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/company/automation/tests/demo.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality feature",
  "description": "To make sure Login functionality works\r\nRun cucucmber test to verify it is working",
  "id": "login-functionality-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Test Login functionality",
  "description": "",
  "id": "login-functionality-feature;test-login-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I Open URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I clicks on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "login page should open",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_Steps.I_Open_URL()"
});
formatter.result({
  "duration": 15214555992,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_Steps.I_clicks_on_sign_in_link()"
});
formatter.result({
  "duration": 1275609902,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_Steps.login_page_should_open()"
});
formatter.result({
  "duration": 101471663,
  "status": "passed"
});
formatter.after({
  "duration": 121374,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Search product",
  "description": "",
  "id": "login-functionality-feature;search-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I search product",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter search criteria",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "product should display",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProduct_Steps.I_search_product()"
});
formatter.result({
  "duration": 76188310,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.I_enter_search_criteria()"
});
formatter.result({
  "duration": 880527392,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.product_should_display()"
});
formatter.result({
  "duration": 102349,
  "status": "passed"
});
formatter.after({
  "duration": 50224,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Click on Product and Add to Cart",
  "description": "",
  "id": "login-functionality-feature;click-on-product-and-add-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I choose pruduct",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Add to cart",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "product added to Cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCart_Steps.I_choose_pruduct()"
});
formatter.result({
  "duration": 1236938557,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart_Steps.Add_to_cart()"
});
formatter.result({
  "duration": 317515717,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart_Steps.product_added_to_Cart()"
});
formatter.result({
  "duration": 56358392,
  "status": "passed"
});
formatter.after({
  "duration": 46419,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Go to Checkout page",
  "description": "",
  "id": "login-functionality-feature;go-to-checkout-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I click on ProceedToCheckoutbtn",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Product summary should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckOut_Steps.I_click_on_ProceedToCheckoutbtn()"
});
formatter.result({
  "duration": 86155393,
  "status": "passed"
});
formatter.match({
  "location": "CheckOut_Steps.Product_summary_should_display()"
});
formatter.result({
  "duration": 787052302,
  "status": "passed"
});
formatter.after({
  "duration": 41472,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Go to contact Us page",
  "description": "",
  "id": "login-functionality-feature;go-to-contact-us-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I click on contact Us link",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "Contact Us page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUs_Steps.I_click_on_contact_Us_link()"
});
formatter.result({
  "duration": 719142122,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs_Steps.Contact_Us_page_should_display()"
});
formatter.result({
  "duration": 20927,
  "status": "passed"
});
formatter.after({
  "duration": 57072,
  "status": "passed"
});
formatter.uri("features/eCheckout.feature");
formatter.feature({
  "line": 1,
  "name": "Search product Add to cart and Go to Checkout page",
  "description": "",
  "id": "search-product-add-to-cart-and-go-to-checkout-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Search product",
  "description": "",
  "id": "search-product-add-to-cart-and-go-to-checkout-page;search-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I search product",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter search criteria",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "product should display",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProduct_Steps.I_search_product()"
});
formatter.result({
  "duration": 63460073,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.I_enter_search_criteria()"
});
formatter.result({
  "duration": 1188712950,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.product_should_display()"
});
formatter.result({
  "duration": 64682,
  "status": "passed"
});
formatter.after({
  "duration": 44897,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Click on Product and Add to Cart",
  "description": "",
  "id": "search-product-add-to-cart-and-go-to-checkout-page;click-on-product-and-add-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I choose pruduct",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Add to cart",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "product added to Cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCart_Steps.I_choose_pruduct()"
});
formatter.result({
  "duration": 849493446,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart_Steps.Add_to_cart()"
});
formatter.result({
  "duration": 281906865,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart_Steps.product_added_to_Cart()"
});
formatter.result({
  "duration": 68603417,
  "status": "passed"
});
formatter.after({
  "duration": 56311,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Go to Checkout page",
  "description": "",
  "id": "search-product-add-to-cart-and-go-to-checkout-page;go-to-checkout-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I click on ProceedToCheckoutbtn",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Product summary should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckOut_Steps.I_click_on_ProceedToCheckoutbtn()"
});
formatter.result({
  "duration": 68901334,
  "status": "passed"
});
formatter.match({
  "location": "CheckOut_Steps.Product_summary_should_display()"
});
formatter.result({
  "duration": 909453473,
  "status": "passed"
});
formatter.after({
  "duration": 51746,
  "status": "passed"
});
});