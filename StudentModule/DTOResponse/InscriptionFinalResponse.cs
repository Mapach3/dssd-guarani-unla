using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentModule.DTOResponse
{
    public class InscriptionFinalResponse
    {
        public int UserId { get; set; }
        public int FinalId { get; set; }
        public int Score { get; set; }
        public bool InscriptionReminder { get; set; }
    }
}
