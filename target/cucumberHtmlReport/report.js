$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("rediffLogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Login to rediffmail",
  "description": "I want to use this template for my feature file",
  "id": "login-to-rediffmail",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.before({
  "duration": 4839340300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login with valid username and password",
  "description": "",
  "id": "login-to-rediffmail;login-with-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Launch rediffmail \"url\"",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I enter \"username\" and \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "click on Signin button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Rediffmail page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User correct \"accountName\" is displayed .",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 19
    }
  ],
  "location": "StepDefs.launch_rediffmail(String)"
});
formatter.result({
  "duration": 222053400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 9
    },
    {
      "val": "password",
      "offset": 24
    }
  ],
  "location": "StepDefs.i_enter_and(String,String)"
});
formatter.result({
  "duration": 681362100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.click_on_Signin_button()"
});
formatter.result({
  "duration": 8416811800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.rediffmail_page_should_be_displayed()"
});
formatter.result({
  "duration": 40500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accountName",
      "offset": 14
    }
  ],
  "location": "StepDefs.user_correct_account_name_is_displayed(String)"
});
formatter.result({
  "duration": 95314000,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: The result of the xpath expression \"/html/body/div[4]/div[1]/div/div[2]/span/cite/a/text()\" is: [object Text]. It should be an element.\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-KFNOH638\u0027, ip: \u0027192.168.0.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\ravib\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51327}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1eca000105912ccd8c64335dff9cfbec\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[4]/div[1]/div/div[2]/span/cite/a/text()}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.lgcc.PageObjects.RediffMailPage.accountname(RediffMailPage.java:32)\r\n\tat com.lgcc.stepDefs.StepDefs.user_correct_account_name_is_displayed(StepDefs.java:54)\r\n\tat ✽.And User correct \"accountName\" is displayed .(rediffLogin.feature:29)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 701438000,
  "status": "passed"
});
});