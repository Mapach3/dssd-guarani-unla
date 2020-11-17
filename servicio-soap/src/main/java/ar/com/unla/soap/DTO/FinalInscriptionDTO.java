package ar.com.unla.soap.DTO;

public class FinalInscriptionDTO {
	
	private Integer userId;
	private Object user;
	private Integer finalId;
	private Object finalCall;
	private Integer score;
	
	
	public FinalInscriptionDTO(Integer userId, Object user, Integer finalId, Object finalCall, Integer score) {
		super();
		this.userId = userId;
		this.user = user;
		this.finalId = finalId;
		this.finalCall = finalCall;
		this.score = score;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public Object getUser() {
		return user;
	}
	public void setUser(Object user) {
		this.user = user;
	}
	public Integer getFinalId() {
		return finalId;
	}
	public void setFinalId(Integer finalId) {
		this.finalId = finalId;
	}
	public Object getFinalCall() {
		return finalCall;
	}
	public void setFinalCall(Object finalCall) {
		this.finalCall = finalCall;
	}
	public Integer getScore() {
		return score;
	}
	public void setScore(Integer score) {
		this.score = score;
	}
	@Override
	public String toString() {
		return "FinalInscriptionDTO [userId=" + userId + ", user=" + user + ", finalId=" + finalId + ", finalCall="
				+ finalCall + ", score=" + score + "]";
	}
	
	

}
