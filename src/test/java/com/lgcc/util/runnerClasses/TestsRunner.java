package com.lgcc.util.runnerClasses;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)

@CucumberOptions(
		monochrome= true,
	plugin = {
        "html:target/cucumberHtmlReport",
        "json:target/cucumber-report.json"
    }, // Plugin to generate HTML report and json report
    features = {
    		"src/test/resources/Features" },
    glue = {
            "com/lgcc/stepDefs"
    }
    //tags= "@Regression"
	)
public class TestsRunner {}
