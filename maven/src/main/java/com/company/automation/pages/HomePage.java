package com.company.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;



//@SuppressWarnings("unused")
public class HomePage { 
	
	/*public WebDriver driver;
	
	
	public HomePage(WebDriver driver) {
		this.driver=driver;
		
	}	*/
	
	@FindBy(how=How.CLASS_NAME, using = "login")
	public  WebElement SignIn;
	
	
	
	public void Sign_In()
	{
		
		SignIn.click();
	//	Reporter.addStepLog("SigIn button not working");
		
	}
}
