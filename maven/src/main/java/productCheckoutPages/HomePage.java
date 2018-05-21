package productCheckoutPages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import com.cucumber.listener.Reporter;



//@SuppressWarnings("unused")
public class HomePage { 
	
	/*public WebDriver driver;
	
	
	public HomePage(WebDriver driver) {
		this.driver=driver;
		
	}	*/
	
	@FindBy(how=How.CLASS_NAME, using = "login1")
	public  WebElement SignIn;
	
	
	
	public void Sign_In()
	{
		
		SignIn.click();
	//	Reporter.addStepLog("SigIn button not working");
		
	}
}
