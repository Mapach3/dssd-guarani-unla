package ar.com.unla.soap.DTO;

import java.util.List;

public class UserDTO {
	


    private  Integer id;
    private String email;
    private String userName;
    private  String password ;
    private String name;
    private String surname;
    private String dni;
    private Boolean active;
    private Boolean passwordChanged;
    private String ImgBase64;
    private Integer role;
    private List<CourseDTO> courses;
    private Object inscriptionFinals;
    private Object evaluationInstances;
    private Object address;
    private Object career;
    private Integer careerId;
    
    
    
    
    
	public UserDTO() {
		super();
	}
	public UserDTO(Integer id, String email, String userName, String password, String name, String surname, String dni,
			Boolean active, Boolean passwordChanged, String imgBase64, Integer role, List<CourseDTO> courses,
			Object inscriptionFinals, Object evaluationInstances, Object address, Object career,Integer careerId) {
		super();
		this.id = id;
		this.email = email;
		this.userName = userName;
		this.password = password;
		this.name = name;
		this.surname = surname;
		this.dni = dni;
		this.active = active;
		this.passwordChanged = passwordChanged;
		ImgBase64 = imgBase64;
		this.role = role;
		this.courses = courses;
		this.inscriptionFinals = inscriptionFinals;
		this.evaluationInstances = evaluationInstances;
		this.address = address;
		this.career = career;
		this.careerId = careerId;
	}
	
	public Integer getCareerId() {
		return careerId;
	}
	public void setCareerId(Integer careerId) {
		this.careerId = careerId;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}
	public String getDni() {
		return dni;
	}
	public void setDni(String dni) {
		this.dni = dni;
	}
	public Boolean getActive() {
		return active;
	}
	public void setActive(Boolean active) {
		this.active = active;
	}
	public Boolean getPasswordChanged() {
		return passwordChanged;
	}
	public void setPasswordChanged(Boolean passwordChanged) {
		this.passwordChanged = passwordChanged;
	}
	public String getImgBase64() {
		return ImgBase64;
	}
	public void setImgBase64(String imgBase64) {
		ImgBase64 = imgBase64;
	}
	public Integer getRole() {
		return role;
	}
	public void setRole(Integer role) {
		this.role = role;
	}
	public List<CourseDTO> getCourses() {
		return courses;
	}
	public void setCourses(List<CourseDTO> courses) {
		this.courses = courses;
	}
	public Object getInscriptionFinals() {
		return inscriptionFinals;
	}
	public void setInscriptionFinals(Object inscriptionFinals) {
		this.inscriptionFinals = inscriptionFinals;
	}
	public Object getEvaluationInstances() {
		return evaluationInstances;
	}
	public void setEvaluationInstances(Object evaluationInstances) {
		this.evaluationInstances = evaluationInstances;
	}
	public Object getAddress() {
		return address;
	}
	public void setAddress(Object address) {
		this.address = address;
	}
	public Object getCareer() {
		return career;
	}
	public void setCareer(Object career) {
		this.career = career;
	}
	@Override
	public String toString() {
		return "UserDTO [id=" + id + ", email=" + email + ", userName=" + userName + ", password=" + password
				+ ", name=" + name + ", surname=" + surname + ", dni=" + dni + ", active=" + active
				+ ", passwordChanged=" + passwordChanged + ", ImgBase64=" + ImgBase64 + ", role=" + role + ", courses="
				+ courses + ", inscriptionFinals=" + inscriptionFinals + ", evaluationInstance=" + evaluationInstances
				+ ", address=" + address + ", career=" + career + "]";
	}
    
    
}
