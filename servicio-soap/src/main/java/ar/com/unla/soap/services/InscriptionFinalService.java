package ar.com.unla.soap.services;


import java.io.IOException;

import org.springframework.stereotype.Service;

import ar.com.unla.soap.DTO.FinalInscriptionDTO;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

@Service
public class InscriptionFinalService {
	
	public FinalInscriptionDTO putFinalInscripcion(FinalInscriptionDTO finalInscription) throws IOException {
		
		OkHttpClient client = new OkHttpClient().newBuilder()
				  .build();
				MediaType mediaType = MediaType.parse("application/json");
				RequestBody body = RequestBody.create(mediaType, "{\n  \"userId\": "+finalInscription.getUserId()+",\n  \"user\": null,\n  \"finalId\": "+finalInscription.getFinalId()+",\n  \"finalCall\": null, \n\"score\":"+finalInscription.getScore()+"\n\n}");
				Request request = new Request.Builder()
				  .url("http://ddsdguarani_web:8090/api/InscriptionFinal/3")
				  .method("PUT", body)
				  .addHeader("Content-Type", "application/json")
				  .build();
				Response response = client.newCall(request).execute();
				
				if(response.isSuccessful()) {
					return finalInscription;
				}else {
					return null;
				}
	}

}
