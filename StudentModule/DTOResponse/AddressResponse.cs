using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentModule.DTOResponse
{
    public class AddressResponse
    {
        public int Id { get; set; }
        public string StreetAndNumber { get; set; }
        public string Location { get; set; }
        public string PostalCode { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public int User { get; set; }
    }
}
