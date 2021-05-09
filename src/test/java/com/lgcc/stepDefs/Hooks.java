package com.lgcc.stepDefs;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import com.lgcc.utils.utilities.ReadConfig;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	public static WebDriver driver;
	
	public static ReadConfig readConfig;
	
	@Before
	public void setup(Scenario scenario) {
		System.out.println("Execution started: "+scenario.getName());
		readConfig = new ReadConfig();	
		String browser= readConfig.getbrowser();
		System.out.println(browser);
		if(browser.equals("Chrome")) {
			System.setProperty("webdriver.chrome.driver",readConfig.getChromePath());
			
			driver= new ChromeDriver();
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			driver.get(readConfig.getUrl());
		}
	}
	
	
	@After
	public void teardown() {
		System.out.println("@after annotation");
		
		if(driver!=null) driver.quit();
	}

}
