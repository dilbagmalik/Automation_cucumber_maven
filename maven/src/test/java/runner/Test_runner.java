package runner;
import java.io.File;
import java.io.IOException;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.company.automation.tests.Browser;
import com.company.automation.tests.Hooks;
import com.cucumber.listener.Reporter;
import com.google.common.io.Files;

import cucumber.api.CucumberOptions;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.junit.Cucumber;
import extentReports.ExtentManager;
import cucumber.api.Scenario;
//
import org.junit.runner.RunWith;



import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(strict = false,
features = {"C:\\Program Files (x86)\\Jenkins\\workspace\\Automation\\maven\\src\\test\\java\\com\\company\\automation\\tests\\"} 
,glue={"classpath:com.company.automation.tests"},
//tags= {"@checkout"},
plugin = {"pretty",
		"json:target/cucumber.json",
		"html:target/cucumber-pretty",
		"com.cucumber.listener.ExtentCucumberFormatter:target/extentreport.html"


}
		)



public class Test_runner {

	@AfterClass
	public static void writeExtentReport() throws IOException {
		Reporter.loadXMLConfig("./src/test/java/configs/extent-config.xml");
		Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
		Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
		Reporter.setSystemInfo("Machine", 	"Windows 7" + "64 Bit");
		Reporter.setSystemInfo("Selenium", "3.7.0");
		Reporter.setSystemInfo("Maven", "3.5.2");
		Reporter.setSystemInfo("Java Version", "1.8.0_151");

	}



}
