package com.company.automation.tests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Search {

	/*	public WebDriver driver;

	public Search(WebDriver driver){
		this.driver=driver;
	}*/
	Getdata getdata = new Getdata();
	@FindBy(how=How.ID, using="search_query_top")
		private WebElement Input_Search;
	
	@FindBy(how=How.NAME, using="submit_search")
	private WebElement SubmitSearch;
	
	public void SearchProduct() {
		//Input_Search.sendKeys(Config.getproduct());
		Input_Search.sendKeys(Getdata.rootNode.path("product").asText());
		
		
		
	}
	
	public void Submit_Search() {
		SubmitSearch.click();
		
	}
	
	public void SearchResults() {
		System.out.println("Result displayed");
		
	}

}
