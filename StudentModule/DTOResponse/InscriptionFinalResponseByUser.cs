using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentModule.DTOResponse
{
    public class InscriptionFinalResponseByUser
    {
        public UserResponse User { get; set; }
        public FinalCallResponseForInscriptionByUser FinalCall { get; set; }
        public int Score { get; set; }
    }
}
