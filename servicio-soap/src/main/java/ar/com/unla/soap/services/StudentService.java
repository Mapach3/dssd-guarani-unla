package ar.com.unla.soap.services;

import java.io.IOException;

import org.springframework.stereotype.Service;

import ar.com.unla.soap.DTO.UserDTO;
import io.spring.guides.gs_producing_web_service.Student;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
@Service
public class StudentService {
	
	
	public Response sendRequestToGetStudent(String id) throws IOException {
		OkHttpClient client = new OkHttpClient().newBuilder()
				  .build();
				Request request = new Request.Builder()
				  .url("http://ddsdguarani_web:8090/api/User/"+id)
				  .method("GET", null)
				  .build();
			return client.newCall(request).execute();
				

	}
	
	public Student userDTOtoStudent(UserDTO user) {
		Student student = new Student();
		student.setActive(user.getActive());
		student.setDni(user.getDni());
		student.setEmail(user.getEmail());
		student.setId(user.getId());
		student.setName(user.getName());
		student.setPassword(user.getPassword());
		student.setPasswordChanged(user.getPasswordChanged());
		student.setRole(user.getRole());
		student.setSurname(user.getSurname());
		student.setUserName(user.getUserName());
		return student;
	}
	
	
	

}
