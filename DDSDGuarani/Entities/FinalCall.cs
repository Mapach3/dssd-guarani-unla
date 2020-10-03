using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace DDSDGuarani.Entities
{
    public class FinalCall
    {
        [Key]
        public int IdFinalCall { get; set; }
        
        [AllowNull]
        public DateTime Date { get; set; }

        [ForeignKey("IdSubject")]
        [Required]
        public Subject Subject { get; set; }

        [ForeignKey("IdInscriptionWindow")]
        [Required]
        public InscriptionWindow InscriptionWindow { get; set; }

        public List<InscriptionFinal> FinallCallInscriptionFinals { get; set; }

    }
}
