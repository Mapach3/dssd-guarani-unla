package ar.com.unla.soap.DTO;

import java.util.List;

public class SubjectDTO {
	private Integer id;
	private String name;
	private String startTime;
	private String endTime;
	private Integer period;
	private Object weekDay;
	private Integer year;
	private Integer shift;
	private List<CourseDTO> courses;
	private Object finals;
	private Object inscriptionWindow;
	private Object career;
	
	
	public SubjectDTO() {
		super();
	}
	

	public SubjectDTO(Integer id, String name, String startTime, String endTime, Integer period, Object weekDay,
			Integer year, Integer shift, List<CourseDTO> courses, Object finals, Object inscriptionWindow,
			Object career) {
		super();
		this.id = id;
		this.name = name;
		this.startTime = startTime;
		this.endTime = endTime;
		this.period = period;
		this.weekDay = weekDay;
		this.year = year;
		this.shift = shift;
		this.courses = courses;
		this.finals = finals;
		this.inscriptionWindow = inscriptionWindow;
		this.career = career;
	}


	public Object getWeekDay() {
		return weekDay;
	}


	public void setWeekDay(Object weekDay) {
		this.weekDay = weekDay;
	}


	public Integer getPeriod() {
		return period;
	}

	public void setPeriod(Integer period) {
		this.period = period;
	}

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getStartTime() {
		return startTime;
	}
	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	
	public Integer getYear() {
		return year;
	}
	public void setYear(Integer year) {
		this.year = year;
	}
	public Integer getShift() {
		return shift;
	}
	public void setShift(Integer shift) {
		this.shift = shift;
	}
	public List<CourseDTO> getCourses() {
		return courses;
	}
	public void setCourses(List<CourseDTO> courses) {
		this.courses = courses;
	}
	
	public Object getFinals() {
		return finals;
	}
	public void setFinals(Object finals) {
		this.finals = finals;
	}
	public Object getInscriptionWindow() {
		return inscriptionWindow;
	}
	public void setInscriptionWindow(Object inscriptionWindow) {
		this.inscriptionWindow = inscriptionWindow;
	}
	public Object getCareer() {
		return career;
	}
	public void setCareer(Object career) {
		this.career = career;
	}

	@Override
	public String toString() {
		return "SubjectDTO [id=" + id + ", name=" + name + ", startTime=" + startTime + ", endTime=" + endTime
				+ ", period=" + period + ", year=" + year + ", shift="
				+ shift + ", courses=" + courses + ", finals=" + finals
				+ ", inscriptionWindow=" + inscriptionWindow + ", career=" + career + "]";
	}
	
	
	
}
