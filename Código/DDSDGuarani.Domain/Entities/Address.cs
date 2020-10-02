using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DDSDGuarani.Domain.Entities
{
    public class Address
    {
        [Key]
        public int IdAddress{ get; set; }
        
        public String StreetAndNumber { get; set; }
        public String Location { get; set; }
        public String PostalCode { get; set; }
        public String City { get; set; }
        public String Country { get; set; }
        
        public User User { get; set; }
    }
}
