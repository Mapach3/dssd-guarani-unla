using DDSDGuarani.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DDSDGuarani.Entities
{
    public class User
    {
        [Key]
        public int IdUser { get; set; }

        public string Email { get; set; } 
        public string Password { get; set; }
        public string Name { get; set; } 
        public string Surname { get; set; }
        public string Dni { get; set; }
        public bool Active { get; set; }
        public bool PasswordChanged { get; set; }
        public List<Course> UserCourses { get; set; } = new List<Course>();
        public List<InscriptionFinal> UserInscriptionFinals { get; set; } = new List<InscriptionFinal>();
        public List<EvaluationInstance> UserEvaluations { get; set; } = new List<EvaluationInstance>();

        public UserRole Role { get; set; }
        
        [ForeignKey("IdAddress")]
        [Required]
        public Address Address { get; set; }





    }
}
