package ar.com.unla.soap.ws;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

import com.fasterxml.jackson.databind.ObjectMapper;

import ar.com.unla.soap.DTO.CourseDTO;
import ar.com.unla.soap.DTO.SubjectDTO;
import ar.com.unla.soap.DTO.UserDTO;
import ar.com.unla.soap.services.StudentService;
import ar.com.unla.soap.services.SubjectService;
import io.spring.guides.gs_producing_web_service.GetStudentsBySubjectRequest;
import io.spring.guides.gs_producing_web_service.GetStudentsBySubjectResponse;
import io.spring.guides.gs_producing_web_service.Student;
import io.spring.guides.gs_producing_web_service.StudentList;
import okhttp3.Response;
@Endpoint
public class StudentEndpoint {
	private static final String NAMESPACE_URI = "http://spring.io/guides/gs-producing-web-service";
	@Autowired
	private SubjectService subjectService;
	@Autowired
	private StudentService studentService;
	
	@PayloadRoot(namespace = NAMESPACE_URI, localPart = "getStudentsBySubjectRequest")
	@ResponsePayload
	public GetStudentsBySubjectResponse getCountry(@RequestPayload GetStudentsBySubjectRequest request) {
		GetStudentsBySubjectResponse response = new GetStudentsBySubjectResponse();
		SubjectDTO subject = null;
		try {
			ObjectMapper objectMapper = new ObjectMapper();
			subject	= objectMapper.readValue(this.subjectService.sendRequestToGetSubject(String.valueOf(request.getIdSubject())).body().string(),SubjectDTO.class);
			response.setStudents(this.getUserList(subject));
		}catch(Exception e ) {
					
				}

		return response;
	}
	
	private StudentList getUserList(SubjectDTO subject){
		StudentList list = new StudentList();
		List<Student> studentList = new ArrayList<Student>();
		for(CourseDTO c: subject.getCourses()) {
			try {
			Response response = this.studentService.sendRequestToGetStudent(String.valueOf(c.getUserId()));
			ObjectMapper objectMapper = new ObjectMapper();
			UserDTO user = objectMapper.readValue(response.body().string(), UserDTO.class);
			if(user.getRole().equals(1)) {
			Student s=this.studentService.userDTOtoStudent(user);
			studentList.add(s);
			
			}
			
			
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		list.getStudents().addAll(studentList);
		return list;
	}

}
