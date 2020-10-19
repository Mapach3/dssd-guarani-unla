using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DDSDGuarani.Entities
{
    public class Address
    {
        [Key]
        public int IdAddress{ get; set; }
        
        public string StreetAndNumber { get; set; }
        public string Location { get; set; }
        public string PostalCode { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        
        
        public User User { get; set; }
    }
}
