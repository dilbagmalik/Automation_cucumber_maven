package com.company.automation.tests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.company.automation.pages.HomePage;
import com.company.automation.pages.LoginPage;
import com.company.automation.utilities.Browser;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomePage_Steps  {//extends Base
	 //public WebDriver driver;
	
	Browser browser= new Browser();
	HomePage HomePage= PageFactory.initElements(Browser.driver, HomePage.class);
	LoginPage LoginPage = PageFactory.initElements(Browser.driver, LoginPage.class);
	
	@Given("^I Open URL$")
	public void I_Open_URL() {
	//ExtentManager.test =ExtentManager.GetExtent().createTest("Login","Browser launched");
	Browser.launchURL();		
	
	//ExtentManager.extent.flush();
	}
	
	@When("^I clicks on sign in link$")
	public void I_clicks_on_sign_in_link() {
	//ExtentManager.test =ExtentManager.GetExtent().createTest("Login","SignIn Clicked");
	
		HomePage.Sign_In();
		
	//ExtentManager.extent.flush();
	}
	
	
	@Then("^login page should open$")
	public void login_page_should_open() {
	    
		LoginPage.Verify_Login_Page();
		 
	}

}
