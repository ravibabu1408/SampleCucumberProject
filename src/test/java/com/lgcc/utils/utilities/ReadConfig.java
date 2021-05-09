package com.lgcc.utils.utilities;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

public class ReadConfig {
	
	Properties prop;
	
	public ReadConfig() {
		File src = new File("./Configuration/config.properties");
		
		try {
			FileInputStream fs= new FileInputStream(src);
			
		  prop= new Properties();
		  prop.load(fs);
		  
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public String getbrowser() { return prop.getProperty("Browser");}
	public String getChromePath(){ return prop.getProperty("chromedriver");}
	public String getUrl() {return prop.getProperty("url");}
	public String getUserName(String username) { return prop.getProperty(username);}
	public String getPassword(String password) { return prop.getProperty(password);}
	public String getAccountName(String accountName) { return prop.getProperty(accountName);}
}
