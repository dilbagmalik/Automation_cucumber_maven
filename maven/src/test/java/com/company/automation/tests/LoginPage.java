package com.company.automation.tests;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;

import extentReports.ExtentManager;

public class LoginPage  { //extends HomePage 


	/*public WebDriver driver;

	public LoginPage(WebDriver driver)
	{
	this.driver=driver;	

	} */

	@FindBy(how=How.ID, using="SubmitLogin")
	public WebElement LoginButton;

	public void Verify_Login_Page() {
		//ExtentReports extent;
		//ExtentTest test;
		//extent = ExtentManager.GetExtent();
		//test = extent.createTest("Automationpractice", "Verify HomePage");


		JavascriptExecutor js = ((JavascriptExecutor)Browser.driver);
		js.executeScript("window.scrollTo(0, document.body.scrollHeight)");



		if( LoginButton.isDisplayed()) {
			System.out.println("Login button displayed");
			// ExtentManager.test.pass("Pass");
			// ExtentManager.createTest("automationpractice","verify login").pass("Pass");


		}


	}
}