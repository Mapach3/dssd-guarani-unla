using DDSDGuarani.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DDSDGuarani.DTOResponse
{
    public class EvaluationInstanceResponse
    {
        public int IdEvaluationInstance { get; set; }
        public double Score { get; set; }
        public DateTime Date { get; set; }
        public EIType Type { get; set; }
        public int Subject { get; set; }
        public int User { get; set; }
    }
}
