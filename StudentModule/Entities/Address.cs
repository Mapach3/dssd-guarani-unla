using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace StudentModule.Entities
{
    public class Address
    {
        public int Id { get; set; }
        public string StreetAndNumber { get; set; }
        public string Location { get; set; }
        public string PostalCode { get; set; }
        public string City { get; set; }
        public string Country { get; set; }

        //Relation - OneToOne - User
        public User User { get; set; }
    }
}
