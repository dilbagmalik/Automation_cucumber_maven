package com.company.automation.utilities;

import java.util.prefs.Preferences;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.PageFactory;

public class Browser {
	public  static WebDriver driver;

	Getdata url = new Getdata();

	Preferences pref;
	
	public Browser() {
		
	//	pref.get("url", "1");
		url.Getconfigdata();
		System.setProperty("webdriver.gecko.driver", "D:\\D-Drive\\Eclipse\\geckodriver-v0.19.1-win64\\geckodriver.exe");
		driver = new FirefoxDriver();

	}




	public  static void launchURL() {
		// TODO Auto-generated method stub
		//driver.get(Config.geturl());
		
		driver.get(Getdata.rootNode.path("name").asText());
		
	}



}
