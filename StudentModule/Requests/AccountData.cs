using StudentModule.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentModule.Requests
{
    public class AccountData
    {   //ID DE BUSQUEDA
        public int Id { get; set; }

        //DATOS DE CAMBIO
        public string Email { get; set; }
        public string Password { get; set; }
        public string ImgBase64 { get; set; }

        ////SOLO SI ES ROL ADMIN
        //public string Name { get; set; }
        //public string Surname { get; set; }
        //public string Dni { get; set; }

        public Address address { get; set; }
    }
}
