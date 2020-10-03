using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DDSDGuarani.Entities
{
    public class EvaluationInstance
    {
        [Key]
        public int IdEvaluationInstance { get; set; }
        public double Score { get; set; }
        public DateTime Date { get; set; }
        public EIType Type { get; set; }
        
        [ForeignKey("IdSubject")]
        public Subject Subject { get; set; }

        [ForeignKey("IdUser")]
        public User User { get; set; }


        public enum EIType { 
            COURSE=0,
            SUBJECT=1
        }

    }
}
