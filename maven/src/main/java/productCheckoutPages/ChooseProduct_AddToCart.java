package productCheckoutPages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ChooseProduct_AddToCart {

/*	private WebDriver driver;
	
	public ChooseProduct_AddToCart(WebDriver driver) {
		this.driver=driver;
	} */
	
	@FindBy(how=How.XPATH, using ="//*[@id=\"center_column\"]/ul/li/div/div[2]/h5/a")  //
	WebElement Product;
	
	@FindBy(how= How.NAME, using ="Submit")
	WebElement add_to_Cart;
	
	@FindBy(how= How.XPATH, using ="//*[@id=\"layer_cart\"]/div[1]/div[2]/div[4]/a")
	WebElement ProccedToCheckOut;
	
	
	
	public void chooseProduct() {
		Product.click();
	}


	public void addtoCart()
	{
	add_to_Cart.click();
	}
	
	public void Continue_CheckoutPage()
	{
		ProccedToCheckOut.isDisplayed();
}
}