using System;
using System.Collections.Generic;
using System.Text;

namespace DDSDGuarani.Entities
{
    public class InscriptionFinal
    {
        //Relation - ManyToOne - User
        public int UserId { get; set; }
        public User User { get; set; }


        //Relation - ManyToOne - FinalCall
        public int FinalId { get; set; }
        public FinalCall FinalCall { get; set; }
    
        public int Score { get; set; }
        public bool InscriptionReminder { get; set; }
    }

}
