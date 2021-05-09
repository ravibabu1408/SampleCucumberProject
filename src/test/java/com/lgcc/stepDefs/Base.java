package com.lgcc.stepDefs;

import org.openqa.selenium.WebDriver;

import com.lgcc.PageObjects.RediffLoginPage;
import com.lgcc.PageObjects.RediffMailPage;
import com.lgcc.utils.utilities.ReadConfig;

public class Base {
	
	public WebDriver driver;
	public ReadConfig readConfig;
	public RediffLoginPage rediffLoginPage;
	public RediffMailPage rediffMailPage;

}
