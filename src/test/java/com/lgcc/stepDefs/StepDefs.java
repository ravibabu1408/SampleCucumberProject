package com.lgcc.stepDefs;

import static org.testng.Assert.assertTrue;

import org.junit.Assert;

import com.lgcc.PageObjects.RediffLoginPage;
import com.lgcc.PageObjects.RediffMailPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefs extends Base {
	
	
	public StepDefs() {
		
		driver= Hooks.driver;
		rediffLoginPage= new RediffLoginPage(driver);
		readConfig=Hooks.readConfig;
	}
	
	
	
	@Given("^Launch rediffmail \"([^\"]*)\"$")
	public void launch_rediffmail(String arg1) {
		System.out.println("Rediffmail link launched");
	}

	@When("^I enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_and(String username, String password) throws Throwable {
     
		rediffLoginPage.enterUsername(readConfig.getUserName(username));
		rediffLoginPage.enterPassword(readConfig.getPassword(password));
		
	   
	}

	@When("^click on Signin button$")
	public void click_on_Signin_button() throws Throwable {
		rediffLoginPage.SignIn();
		Thread.sleep(5000);
	}

	@Then("^Rediffmail page should be displayed$")
	public void rediffmail_page_should_be_displayed(){
	
	}

	@Then("^User correct \"([^\"]*)\" is displayed \\.$")
	public void user_correct_account_name_is_displayed(String accountName ){
		rediffMailPage= new RediffMailPage(driver);
	assertTrue(rediffMailPage.accountname(readConfig.getAccountName(accountName)), "Account name is not present");
	
	rediffMailPage.logout();
	}



}
