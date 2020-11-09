using DDSDGuarani.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DDSDGuarani.DTOResponse
{
    public class UserResponse
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Dni { get; set; }
        public bool Active { get; set; }
        public bool PasswordChanged { get; set; }
        public string ImgBase64 { get; set; }
        public UserRole Role { get; set; }
        public List<CourseResponse> Courses { get; set; }
        public List<InscriptionFinalResponse> InscriptionFinals { get; set; }
        public List<EvaluationInstanceResponse> EvaluationInstances { get; set; }
        public AddressResponse Address { get; set; }
        public CareerResponse Career { get; set; }
    }
}
