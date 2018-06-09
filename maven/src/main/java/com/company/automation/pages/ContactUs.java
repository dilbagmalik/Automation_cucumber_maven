package com.company.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ContactUs {

	@FindBy(how=How.ID, using = "contact-link")
	public  WebElement Contact;
	
	public void contactus() {
		Contact.click();
		
	}
	
	
}
