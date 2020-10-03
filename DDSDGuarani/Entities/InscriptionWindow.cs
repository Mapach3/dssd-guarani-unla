using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DDSDGuarani.Entities
{
    public class InscriptionWindow
    {
        [Key]
        public int IdInscriptionWindow { get; set; }
        
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        
        public List<Subject> Subjects { get; set; }

        public List<FinalCall> Finals { get; set; }

    }
}
