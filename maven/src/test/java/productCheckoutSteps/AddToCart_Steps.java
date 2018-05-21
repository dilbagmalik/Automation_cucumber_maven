package productCheckoutSteps;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import baseClass.Browser;
import baseClass.CloseQuit;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import productCheckoutPages.ChooseProduct_AddToCart;

public class AddToCart_Steps {
	
ChooseProduct_AddToCart ChooseProdAddCart = PageFactory.initElements(Browser.driver, ChooseProduct_AddToCart.class);

@Given("^I choose pruduct$")
public void I_choose_pruduct() {
	ChooseProdAddCart.chooseProduct();		
	
}

@When("^Add to cart$")
public void Add_to_cart() {

	ChooseProdAddCart.addtoCart();
	
}


@Then("^product added to Cart$")
public void product_added_to_Cart() {
    
	ChooseProdAddCart.Continue_CheckoutPage();
	
	
}




}
