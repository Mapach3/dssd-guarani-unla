using DDSDGuarani.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DDSDGuarani.Domain.Entities
{
    public class Subject
    {
        [Key]
        public long IdSubject { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public int Year { get; set; }
        public int Period { get; set; }
        public SubjectShift Shift { get; set; }
        public List<Course> SubjectCourses { get; set; }
        
        [ForeignKey("IdInscriptionWindow")]
        public InscriptionWindow InscriptionWindow { get; set; }


        public enum SubjectShift { 
            MORNING   = 1,
            AFTERNOON = 2,
            EVENING   = 3 
        }

    }
}
