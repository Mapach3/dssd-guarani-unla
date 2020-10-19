using DDSDGuarani.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DDSDGuarani.DTOResponse
{
    public class SubjectResponse
    {
        public int IdSubject { get; set; }
        public string Name { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }   
        public int Year { get; set; }
        public int Period { get; set; }
        public SubjectShift Shift { get; set; }
        public List<CourseResponse> SubjectCourses { get; set; }
        public List<EvaluationInstanceResponse> SubjectEvaluations { get; set; }
        public List<FinalCallResponse> SubjectFinals { get; set; }
        public InscriptionWindowResponse InscriptionWindow { get; set; }
    }
}
