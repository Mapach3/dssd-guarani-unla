using DDSDGuarani.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DDSDGuarani.Entities
{
    public class Subject
    {
        [Key]
        public int IdSubject { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public int Year { get; set; }
        public int Period { get; set; }
        public SubjectShift Shift { get; set; }
        public List<Course> SubjectCourses { get; set; }
        public List<EvaluationInstance> SubjectEvaluations { get; set; }
        
        public List<FinalCall> SubjectFinals { get; set; }

        [ForeignKey("IdInscriptionWindow")]
        public InscriptionWindow InscriptionWindow { get; set; }
    }
}
