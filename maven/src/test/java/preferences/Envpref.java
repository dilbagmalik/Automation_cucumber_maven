package preferences;

import java.util.prefs.Preferences;

public class Envpref {

	Preferences pref;
	
	public void Env() {
		pref.put("url", "http://automationpractice.com/index.php");
		
	}
	
}
