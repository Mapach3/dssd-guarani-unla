using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DDSDGuarani.Domain.Entities
{
    public class User
    {
        [Key]
        public long IdUser { get; set; }
       
        public String Email { get; set; }
        public String Password { get; set; }
        public String Name { get; set; }
        public String Surname { get; set; }
        public bool Active { get; set; }
        public bool PasswordChanged { get; set; }
        public List<Course> UserCourses { get; set; }

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
