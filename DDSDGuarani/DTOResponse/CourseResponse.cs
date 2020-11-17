using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DDSDGuarani.DTOResponse
{
    public class CourseResponse
    {
        public int SubjectId { get; set; }
        public int UserId { get; set; }
        public double CourseAverage { get; set; }
        public bool InscriptionReminder { get; set; }
    }
}
