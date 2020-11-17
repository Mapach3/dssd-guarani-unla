package ar.com.unla.soap.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;

import ar.com.unla.soap.DTO.CourseDTO;
import ar.com.unla.soap.DTO.SubjectDTO;
import ar.com.unla.soap.DTO.UserDTO;
import io.spring.guides.gs_producing_web_service.Course;
@Service
public class DocenteService {
	@Autowired
	private SubjectService subjectService;
	
	public List<Course> courseDtoToCourse(List<CourseDTO> coursesDto){
		List<Course> courses = new ArrayList<>();
		
	for (CourseDTO c :coursesDto){
		Course course = new Course();
		if(c.getSubjectId() != null) {
			try {
			
				SubjectDTO subject = new SubjectDTO();
				ObjectMapper objectMapper = new ObjectMapper();
				subject = objectMapper.readValue(this.subjectService.sendRequestToGetSubject(String.valueOf(c.getSubjectId())).body().string(),SubjectDTO.class);
				course.setSubject(this.subjectService.SubjectDtoToSubject(subject));
				course.setSubjectId(subject.getId());
			
				
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		course.setUserId(c.getUserId());
		course.setCourseAverage(c.getCourseAverage() != null ? String.valueOf(c.getCourseAverage()) :null);
		courses.add(course);
		};
		
		return courses;
		
	}
	


}
