using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentModule.DTOResponse
{
    public class CourseResponse
    {
        public int SubjectId { get; set; }
        public int UserId { get; set; }
        public double CourseAverage { get; set; }
    }
}
