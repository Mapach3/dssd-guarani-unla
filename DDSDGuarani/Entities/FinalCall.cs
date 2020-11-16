using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace DDSDGuarani.Entities
{
    public class FinalCall
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }

        //Relation - ManyToOne - Subject
        public int SubjectId { get; set; }
        public Subject Subject { get; set; }

        //Relation - ManyToOne - InscriptionWindow
        public int InscriptionWindowId { get; set; }
        public InscriptionWindow InscriptionWindow { get; set; }

        //Relation - OneToMany - InscriptionFinal
        public List<InscriptionFinal> InscriptionFinals { get; set; } = new List<InscriptionFinal>();
    }
}
