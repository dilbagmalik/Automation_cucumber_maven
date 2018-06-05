$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/demo.feature");
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
  "duration": 10524487958,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_Steps.I_clicks_on_sign_in_link()"
});
formatter.result({
  "duration": 1436920979,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_Steps.login_page_should_open()"
});
formatter.result({
  "duration": 101975039,
  "status": "passed"
});
formatter.after({
  "duration": 116808,
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
  "duration": 98680834,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.I_enter_search_criteria()"
});
formatter.result({
  "duration": 861859845,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.product_should_display()"
});
formatter.result({
  "duration": 109198,
  "status": "passed"
});
formatter.after({
  "duration": 50223,
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
  "duration": 1117886001,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart_Steps.Add_to_cart()"
});
formatter.result({
  "duration": 314995029,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart_Steps.product_added_to_Cart()"
});
formatter.result({
  "duration": 54567086,
  "status": "passed"
});
formatter.after({
  "duration": 66965,
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
  "duration": 73187454,
  "status": "passed"
});
formatter.match({
  "location": "CheckOut_Steps.Product_summary_should_display()"
});
formatter.result({
  "duration": 1119644585,
  "status": "passed"
});
formatter.after({
  "duration": 58974,
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
  "duration": 77229305,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.I_enter_search_criteria()"
});
formatter.result({
  "duration": 773422325,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.product_should_display()"
});
formatter.result({
  "duration": 87891,
  "status": "passed"
});
formatter.after({
  "duration": 42995,
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
  "duration": 888692899,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart_Steps.Add_to_cart()"
});
formatter.result({
  "duration": 321344879,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart_Steps.product_added_to_Cart()"
});
formatter.result({
  "duration": 58403098,
  "status": "passed"
});
formatter.after({
  "duration": 56692,
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
  "duration": 67301791,
  "status": "passed"
});
formatter.match({
  "location": "CheckOut_Steps.Product_summary_should_display()"
});
formatter.result({
  "duration": 689807405,
  "status": "passed"
});
formatter.after({
  "duration": 35765,
  "status": "passed"
});
});