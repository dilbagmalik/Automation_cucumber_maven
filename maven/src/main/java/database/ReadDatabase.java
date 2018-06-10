/**
 * 
 */
package database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;


import org.junit.Test;

/**
 * @author dmalik
 *
 */
public class ReadDatabase {
	
	
	public void readdatabase()  { //throws ClassNotFoundException, SQLException
	try {
	Class.forName("com.mysql.jdbc.Driver");
	Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/automation", "newuser", "password");
	Statement stmt = con.createStatement();
	ResultSet rset= stmt.executeQuery("select * from emp");
	while(rset.next())  
	System.out.println(rset.getInt(1)+"  "+rset.getString(2)+"  "+rset.getString(3));
	con.close(); 
		
	}
	
	catch(Exception e){ System.out.println(e);}  
	}

	
	@Test
	public void run()  { //throws ClassNotFoundException, SQLException
		readdatabase();
	}

}
