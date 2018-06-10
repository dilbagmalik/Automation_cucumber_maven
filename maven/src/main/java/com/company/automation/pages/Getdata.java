package com.company.automation.pages;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Iterator;

import org.junit.Test;

import com.company.automation.tests.Config;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;		


public class Getdata {
	public Config Config;
	public static String name;
	public static JsonNode rootNode;

	public void Getconfigdata() {

		try {
			//File data = new File("./src/test/java/testdata/data.json");  



			//ObjectMapper mapper = new ObjectMapper();
			//Config = mapper.readValue(data,Config.class);

			ObjectMapper objectMapper = new ObjectMapper();
			//read json file data to String
			byte[] jsonData = Files.readAllBytes(Paths.get("./src/test/java/testdata/data.json"));
			//read JSON like DOM Parser
			rootNode = objectMapper.readTree(jsonData);
			//update JSON data
			//((ObjectNode) rootNode).put("id", 500);
			//System.out.println(rootNode.path("cities")..path(0).asText());
			//objectMapper.writeValue(new File("./src/test/java/testdata/data1.json"), rootNode);

			JsonNode idNode = rootNode.path("id");
			name = rootNode.path("name").asText();
			System.out.println("id = "+idNode.toString());
			System.out.println("name = "+name.toString());

			JsonNode phoneNosNode = rootNode.path("phoneNumbers");
			System.out.println(phoneNosNode.toString());
			Iterator<JsonNode> elements = phoneNosNode.elements();
			while(elements.hasNext()){
				JsonNode phone = elements.next();
				System.out.println("Phone No = "+phone.asLong());
			}
		}

		catch (Exception ex) {
			ex.printStackTrace();
		}
	}		
	////



	///  










	@Test
	public void run() {
		Getconfigdata();
	}
}
