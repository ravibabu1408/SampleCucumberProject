package com.lgcc.PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RediffMailPage {
	
	public WebDriver driver;
	
	@FindBy(xpath="/html/body/div[4]/div[1]/div/div[2]/a[2]")
	private WebElement logout;
	
	@FindBy(xpath="/html/body/div[4]/div[1]/div/div[2]/span/cite/a")
	private WebElement accountname;
	
	
	public RediffMailPage(WebDriver driver) {
		 this.driver=driver;
		 PageFactory.initElements(driver, this);
	}
	
	
	
	public void logout() {
		logout.click();
	}
	
	public boolean accountname(String accountName) {
		
		if(accountName.equals(accountname.getText())) {
			return true;
		}
		else {
		
			return false;
		}
		 
	}

}
