using StudentModule.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StudentModule.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; } 
        public string Password { get; set; }
        public string Name { get; set; } 
        public string Surname { get; set; }
        public string Dni { get; set; }
        public bool Active { get; set; }
        public bool PasswordChanged { get; set; }
        public string ImgBase64 { get; set; }
        public UserRole Role { get; set; }

        //Relation - OneToMany - Course (Muchos a muchos con Subject, Course es la intermedia)
        public List<Course> Courses { get; set; } = new List<Course>();

        //Relation - OneToMany - InscriptionFinal (Muchos a muchos con FinalCall, InscriptionFinal es la intermedia)
        public List<InscriptionFinal> InscriptionFinals { get; set; } = new List<InscriptionFinal>();

        //Relation - OneToMany - EvaluationInstance
        public List<EvaluationInstance> EvaluationInstances { get; set; } = new List<EvaluationInstance>();

        //Relation - OneToOne - Address
        public int AddressId { get; set; }
        public Address Address { get; set; }
    }
}
