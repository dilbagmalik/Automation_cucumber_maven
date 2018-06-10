package com.company.automation.tests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.company.automation.pages.Browser;
import com.company.automation.pages.CheckoutPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class CheckOut_Steps {
	//WebDriver driver;
	CloseQuit CloseQuit = new CloseQuit();
	
	CheckoutPage Checkout = PageFactory.initElements(Browser.driver, CheckoutPage.class);
	
	
	@Given("^I click on ProceedToCheckoutbtn$")
	public void I_click_on_ProceedToCheckoutbtn() {
		Checkout.ProceedToChekout();		
		
	}

	

	@Then("^Product summary should display$")
	public void Product_summary_should_display() {
	    
		Checkout.VerifySummaryTab();
		//CloseQuit.CloseQuitBrowser();;
		
	}

	
	
}
