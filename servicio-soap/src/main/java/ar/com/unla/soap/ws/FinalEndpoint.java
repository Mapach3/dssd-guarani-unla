package ar.com.unla.soap.ws;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

import com.fasterxml.jackson.databind.ObjectMapper;

import ar.com.unla.soap.DTO.FinalInscriptionDTO;
import ar.com.unla.soap.DTO.UserDTO;
import ar.com.unla.soap.services.InscriptionFinalService;
import ar.com.unla.soap.services.StudentService;
import io.spring.guides.gs_producing_web_service.FinalInscription;
import io.spring.guides.gs_producing_web_service.FinalInscriptionList;
import io.spring.guides.gs_producing_web_service.PutStudentsScorereRequest;
import io.spring.guides.gs_producing_web_service.PutStudentsScorereResponse;
import okhttp3.Response;

@Endpoint
public class FinalEndpoint {
	private static final String NAMESPACE_URI = "http://spring.io/guides/gs-producing-web-service";
	@Autowired
	private StudentService studentService;
	@Autowired
	private InscriptionFinalService inscriptionFinalService;
	@PayloadRoot(namespace = NAMESPACE_URI, localPart = "putStudentsScorereRequest")
	@ResponsePayload
	public PutStudentsScorereResponse putStudentsScorereRequest(@RequestPayload PutStudentsScorereRequest putStudentsScorereRequest) {
		PutStudentsScorereResponse response = new PutStudentsScorereResponse();
		FinalInscriptionList inscriptionList = new FinalInscriptionList();
		
		for(FinalInscription f : putStudentsScorereRequest.getFinalInscription().getFinalInscription()) {
			Response responseUser;
			try {
				
				if(this.inscriptionFinalService.putFinalInscripcion(new FinalInscriptionDTO(f.getUserId(),null, f.getFinalId(),null,f.getScore())) != null ) {
					inscriptionList.getFinalInscription().add(f);
				}
				
			
				
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		
			
			
		}
		response.setFinalInscription(inscriptionList);
		
		
		return response;
	}

}
