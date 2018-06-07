package com.company.automation.tests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchProduct_Steps  {
	//WebDriver driver;

	//public SearchProduct_Steps(WebDriver driver) {
	//this.driver=driver;
	//}

	Search SearchProduct = PageFactory.initElements(Browser.driver, Search.class);
	//Search search = new Search(driver);
	
	@Given("^I search product$")
	public void I_search_product() {
		//search.SearchProduct();		
		SearchProduct.SearchProduct();
	}

	@When("^I enter search criteria$")
	public void I_enter_search_criteria() {


		//search.Submit_Search();
		SearchProduct.Submit_Search();

	}


	@Then("^product should display$")
	public void product_should_display() {

		//search.SearchResults();
		SearchProduct.SearchResults();

	}




}
