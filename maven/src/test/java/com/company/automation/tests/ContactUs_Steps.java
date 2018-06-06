package com.company.automation.tests;

import org.openqa.selenium.support.PageFactory;

import com.company.automation.pages.ContactUs;

import baseClass.Browser;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class ContactUs_Steps {

	ContactUs ContactUs= PageFactory.initElements(Browser.driver, ContactUs.class);
	
	@Given("^I click on contact Us link$")
	public void I_click_on_contact_Us_link() {
	//ExtentManager.test =ExtentManager.GetExtent().createTest("Login","Browser launched");
		ContactUs.contactus();
	
	//ExtentManager.extent.flush();
	}
	
	@Then("^Contact Us page should display$")
	public void Contact_Us_page_should_display() {
	    
				 
	}
	
}
