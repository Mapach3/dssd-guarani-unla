using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DDSDGuarani.DTOResponse
{
    public class FinalCallResponse
    {
        public int IdFinalCall { get; set; }
        public DateTime Date { get; set; }
        public int Subject { get; set; }
        public InscriptionWindowResponse InscriptionWindow { get; set; }
        public List<InscriptionFinalResponse> FinallCallInscriptionFinals { get; set; }
    }
}
