using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentModule.DTOResponse
{
    public class FinalCallResponse
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public DateTime ScoreUploadLimit { get; set; }
        public int Subject { get; set; }
        public InscriptionWindowResponse InscriptionWindow { get; set; }
        public List<InscriptionFinalResponse> InscriptionFinals { get; set; }
    }
}
