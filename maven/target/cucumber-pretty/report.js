$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("demo.feature");
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
  "duration": 10131040376,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_Steps.I_clicks_on_sign_in_link()"
});
formatter.result({
  "duration": 1911068235,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_Steps.login_page_should_open()"
});
formatter.result({
  "duration": 95053326,
  "status": "passed"
});
formatter.after({
  "duration": 170456,
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
  "duration": 92817239,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.I_enter_search_criteria()"
});
formatter.result({
  "duration": 1091506481,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.product_should_display()"
});
formatter.result({
  "duration": 141158,
  "status": "passed"
});
formatter.after({
  "duration": 45277,
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
  "duration": 1938213664,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart_Steps.Add_to_cart()"
});
formatter.result({
  "duration": 292761613,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart_Steps.product_added_to_Cart()"
});
formatter.result({
  "duration": 42202971,
  "status": "passed"
});
formatter.after({
  "duration": 34244,
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
  "duration": 78427441,
  "status": "passed"
});
formatter.match({
  "location": "CheckOut_Steps.Product_summary_should_display()"
});
formatter.result({
  "duration": 1101962103,
  "status": "passed"
});
formatter.after({
  "duration": 93978,
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
  "duration": 884284644,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs_Steps.Contact_Us_page_should_display()"
});
formatter.result({
  "duration": 27395,
  "status": "passed"
});
formatter.after({
  "duration": 36526,
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
  "duration": 67465017,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.I_enter_search_criteria()"
});
formatter.result({
  "duration": 1082422113,
  "status": "passed"
});
formatter.match({
  "location": "SearchProduct_Steps.product_should_display()"
});
formatter.result({
  "duration": 79140,
  "status": "passed"
});
formatter.after({
  "duration": 51745,
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
  "duration": 1536583074,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart_Steps.Add_to_cart()"
});
formatter.result({
  "duration": 264862831,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart_Steps.product_added_to_Cart()"
});
formatter.result({
  "duration": 43697501,
  "status": "passed"
});
formatter.after({
  "duration": 79140,
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
  "duration": 69583537,
  "status": "passed"
});
formatter.match({
  "location": "CheckOut_Steps.Product_summary_should_display()"
});
formatter.result({
  "duration": 1220985743,
  "status": "passed"
});
formatter.after({
  "duration": 39190,
  "status": "passed"
});
});