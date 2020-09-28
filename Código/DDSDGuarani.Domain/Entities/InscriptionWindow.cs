using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DDSDGuarani.Domain.Entities
{
    public class InscriptionWindow
    {
        [Key]
        public long IdInscriptionWindow { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public List<Subject> Subjects { get; set; }


    }
}
