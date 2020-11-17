using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentModule.DTOResponse
{
    public class FinalCallResponseForInscriptionByUser
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public bool Active { get; set; }
        public SubjectResponse Subject { get; set; }
        public InscriptionWindowResponse InscriptionWindow { get; set; }
        public List<InscriptionFinalResponse> InscriptionFinals { get; set; }
    }
}
