using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DDSDGuarani.DTOResponse
{
    public class Response
    {
        public int Cod { get; set; }
        public string Mensaje { get; set; }
        public string Data { get; set; }
        public string Rol { get; set; }
        public string ImageUser { get; set; }
        public string NameUser { get; set; }
        public string MailUser { get; set; }
        public int UserId { get; set; }
        public bool PasswordChange { get; set; }
    }
}
