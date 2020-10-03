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
        public bool Active { get; set; }
        public bool PasswordChanged { get; set; }
        public List<Course> UserCourses { get; set; }
        public List<InscriptionFinal> UserInscriptionFinals { get; set; }

        public UserRole Role { get; set; }
        
        [ForeignKey("IdAddress")]
        [Required]
        public Address Address { get; set; }

        public enum UserRole {
            ADMIN = 0,
            STUDENT = 1,
            TEACHER = 2
        }
    }
}
