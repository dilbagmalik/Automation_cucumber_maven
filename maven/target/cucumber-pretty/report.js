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
  "duration": 11951329611,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_Steps.I_clicks_on_sign_in_link()"
});
formatter.result({
  "duration": 1505201368,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_Steps.login_page_should_open()"
});
formatter.result({
  "duration": 91394620,
  "status": "passed"
});
formatter.after({
  "duration": 125939,
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
  "duration": 73255180,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.I_enter_search_criteria()"
});
formatter.result({
  "duration": 1025919518,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.product_should_display()"
});
formatter.result({
  "duration": 122895,
  "status": "passed"
});
formatter.after({
  "duration": 48702,
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
  "duration": 1157285967,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart_Steps.Add_to_cart()"
});
formatter.result({
  "duration": 284308082,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart_Steps.product_added_to_Cart()"
});
formatter.result({
  "duration": 41305796,
  "status": "passed"
});
formatter.after({
  "duration": 46039,
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
  "duration": 70580398,
  "status": "passed"
});
formatter.match({
  "location": "CheckOut_Steps.Product_summary_should_display()"
});
formatter.result({
  "duration": 1137662651,
  "status": "passed"
});
formatter.after({
  "duration": 75335,
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
  "duration": 867415631,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs_Steps.Contact_Us_page_should_display()"
});
formatter.result({
  "duration": 25493,
  "status": "passed"
});
formatter.after({
  "duration": 51746,
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
  "duration": 122482974,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.I_enter_search_criteria()"
});
formatter.result({
  "duration": 966988312,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.product_should_display()"
});
formatter.result({
  "duration": 50604,
  "status": "passed"
});
formatter.after({
  "duration": 30819,
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
  "duration": 889025819,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart_Steps.Add_to_cart()"
});
formatter.result({
  "duration": 305928543,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart_Steps.product_added_to_Cart()"
});
formatter.result({
  "duration": 45889833,
  "status": "passed"
});
formatter.after({
  "duration": 35385,
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
  "duration": 72501447,
  "status": "passed"
});
formatter.match({
  "location": "CheckOut_Steps.Product_summary_should_display()"
});
formatter.result({
  "duration": 679612031,
  "status": "passed"
});
formatter.after({
  "duration": 37287,
  "status": "passed"
});
});