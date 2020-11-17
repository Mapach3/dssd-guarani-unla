package ar.com.unla.soap.DTO;

public class CourseDTO {
	private Integer subjectId;
	private Integer userId;
	private Integer courseAverage;
	
	
	public CourseDTO() {
		super();
	}
	public CourseDTO(Integer subjectId, Integer userId, Integer courseAverage) {
		super();
		this.subjectId = subjectId;
		this.userId = userId;
		this.courseAverage = courseAverage;
	}
	public Integer getSubjectId() {
		return subjectId;
	}
	public void setSubjectId(Integer subjectId) {
		this.subjectId = subjectId;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public Integer getCourseAverage() {
		return courseAverage;
	}
	public void setCourseAverage(Integer courseAverage) {
		this.courseAverage = courseAverage;
	}
	@Override
	public String toString() {
		return "CourseDTO [subjectId=" + subjectId + ", userId=" + userId + ", courseAverage=" + courseAverage + "]";
	}
	
}
