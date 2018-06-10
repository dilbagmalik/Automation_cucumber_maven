package com.company.automation.pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import com.company.automation.utilities.Browser;

public class CheckoutPage {

/*	public WebDriver driver;

	public CheckoutPage(WebDriver driver) {
		this.driver=driver;
		} */
	
	@FindBy(how=How.CSS, using="a.btn.btn-default.button.button-medium")
	WebElement ProceedToChekout_btn;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"order_step\"]/li[1]")
	WebElement Summarytab;
	
	//gb_70
	@FindBy(how=How.ID, using="gb_70")
	WebElement SignIn;
	
	public void ProceedToChekout() {
		//Thread.sleep(5000);
		System.out.println("button is:"+ ProceedToChekout_btn.isDisplayed());
		((JavascriptExecutor)Browser.driver).executeScript("arguments[0].click();", ProceedToChekout_btn);
		
	}
	
	public void VerifySummaryTab()
	{
		Browser.driver.manage().timeouts().implicitlyWait(5000, TimeUnit.SECONDS);
		((JavascriptExecutor)Browser.driver).executeScript("arguments[0].click();", Summarytab);
		System.out.println(Summarytab.isDisplayed());
		
		//((JavascriptExecutor)driver).executeScript("alert('welcome');");
		((JavascriptExecutor)Browser.driver).executeScript("return document.title;").toString();
		//((JavascriptExecutor)driver).executeScript("window.location = 'https://www.google.co.uk/'");
		//((JavascriptExecutor)driver).executeScript("document.getElementById('social_block').window.scrollIntoView(false);");
		//SignIn.click();
	}
	
}
