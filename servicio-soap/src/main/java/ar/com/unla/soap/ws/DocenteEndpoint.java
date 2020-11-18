package ar.com.unla.soap.ws;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

import com.fasterxml.jackson.databind.ObjectMapper;

import ar.com.unla.soap.DTO.UserDTO;
import ar.com.unla.soap.services.DocenteService;
import  io.spring.guides.gs_producing_web_service.*;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;



@Endpoint
public class DocenteEndpoint {
	private static final String NAMESPACE_URI = "http://spring.io/guides/gs-producing-web-service";
	@Autowired
	private DocenteService docenteService;
	@PayloadRoot(namespace = NAMESPACE_URI, localPart = "getCoursesAsignedRequest")
	@ResponsePayload
	@CrossOrigin(origins = "http://localhost:3000/")
	public  GetCoursesAsignedResponse getCountry(@RequestPayload GetCoursesAsignedRequest request) throws IOException {
		GetCoursesAsignedResponse response = new GetCoursesAsignedResponse();
		UserDTO user = this.getUser(String.valueOf(request.getIdUser()));	
		if(user != null && user.getRole().equals(2)) {
			CourseList c = new CourseList();
			c.getCourses().addAll(this.docenteService.courseDtoToCourse(user.getCourses()));
			response.setCourses(c);
		}
			
		
		return response;
	}
	
	private UserDTO getUser(String id) throws IOException {
			UserDTO user = null;
	try {
		ObjectMapper objectMapper = new ObjectMapper();
		user = objectMapper.readValue(this.sendRequestToGetUser(id).body().string(),UserDTO.class);
	}catch(Exception e ) {
		System.out.println("Error "+ e.getMessage());		
	
	}
		
				
		return user;
	}
	
	private Response sendRequestToGetUser(String id) throws IOException {

		OkHttpClient client = new OkHttpClient().newBuilder()
				  .build();
				Request request = new Request.Builder()
				  .url("http://ddsdguarani_web:8090/api/User/"+id)
				  .method("GET", null)
				  .build();
		return client.newCall(request).execute();
		
	}
}
