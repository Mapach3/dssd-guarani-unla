using System;
using System.Collections.Generic;
using System.Text;

namespace DDSDGuarani.Domain.Entities
{
    public class InscriptionFinal
    {
        public int IdUser { get; set; }
        public int IdFinal { get; set; }

        public User User { get; set; }
        public FinalCall FinalCall { get; set; }
    }
}
