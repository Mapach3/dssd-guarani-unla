using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DDSDGuarani.Entities
{
    public class InscriptionWindow
    {
        public int Id { get; set; }  
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        //Relation - OneToMany - FinalCall
        public List<FinalCall> Finals { get; set; } = new List<FinalCall>();

        //Relation - OneToMany - FinalCall
        public List<Subject> Subjects { get; set; } = new List<Subject>();
    }
}
