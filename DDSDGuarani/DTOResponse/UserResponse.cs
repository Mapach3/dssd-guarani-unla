using DDSDGuarani.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DDSDGuarani.DTOResponse
{
    public class UserResponse
    {
        public int IdUser { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public bool Active { get; set; }
        public bool PasswordChanged { get; set; }
        public List<CourseResponse> UserCourses { get; set; }
        public List<InscriptionFinalResponse> UserInscriptionFinals { get; set; }
        public List<EvaluationInstanceResponse> UserEvaluations { get; set; }
        public UserRole Role { get; set; }
        public AddressResponse Address { get; set; }
    }
}
