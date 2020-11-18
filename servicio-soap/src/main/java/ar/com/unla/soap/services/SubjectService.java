package ar.com.unla.soap.services;

import java.io.IOException;

import org.springframework.stereotype.Service;

import ar.com.unla.soap.DTO.SubjectDTO;
import io.spring.guides.gs_producing_web_service.Subject;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
@Service
public class SubjectService {

	
	public Response sendRequestToGetSubject(String id) throws IOException {
		OkHttpClient client = new OkHttpClient().newBuilder()
				  .build();
				Request request = new Request.Builder()
				  .url("http://ddsdguarani_web:8090/api/Subject/"+id)
				  .method("GET", null)
				  .build();
			return client.newCall(request).execute();
				

	}
	
	public Subject SubjectDtoToSubject(SubjectDTO subjectDTO) {
		Subject subject = new Subject();
		subject.setEndTime(subjectDTO.getEndTime());
		subject.setId(subjectDTO.getId());
		subject.setPeriod(subject.getPeriod());
		subject.setStartTime(subjectDTO.getStartTime());
		subject.setYear(subjectDTO.getYear());
		subject.setName(subjectDTO.getName());
		switch(subjectDTO.getShift()) {
			case 1:
				subject.setShift("Mañana");
				break;
			case 2: 
				subject.setShift("Tarde");
				break;
			case 3:
				subject.setShift("Noche");
				break;
		}
		
		
		return subject;
	}
	
	
}
