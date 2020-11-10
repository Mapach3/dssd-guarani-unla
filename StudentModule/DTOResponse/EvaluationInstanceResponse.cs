using StudentModule.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentModule.DTOResponse
{
    public class EvaluationInstanceResponse
    {
        public int Id { get; set; }
        public double Score { get; set; }
        public DateTime Date { get; set; }
        public EIType Type { get; set; }
        public int Subject { get; set; }
        public int User { get; set; }
    }
}
