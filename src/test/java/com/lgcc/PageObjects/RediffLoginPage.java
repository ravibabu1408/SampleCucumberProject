package com.lgcc.PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RediffLoginPage {
	
	public WebDriver driver;
	
	@FindBy(id="login1")
	private WebElement Username;
	
	@FindBy(id="password")
	private WebElement Password;
	
	@FindBy(xpath="/html/body/div/div[1]/div[1]/div[2]/form/div[1]/div[2]/div[2]/div[2]/input[2]")
	private WebElement SignIn;
	
	
	
	
	public RediffLoginPage(WebDriver driver) {
		
		this.driver=driver;
		
		PageFactory.initElements(driver, this);
		
	}
	
	
	public void enterUsername(String username) {
		Username.clear();
		Username.sendKeys(username);
	}
	
	
	public void enterPassword(String password) {
		Password.clear();
		Password.sendKeys(password);
	}
	

	public RediffMailPage SignIn() {
		
		SignIn.click();
		 
		return new RediffMailPage(driver);
	}


	
}
