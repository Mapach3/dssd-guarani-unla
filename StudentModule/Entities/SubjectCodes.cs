using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace StudentModule.Entities
{
    public class SubjectCodes
    {
        [Key]
        public string Code { get; set; }
        public string SubjectName { get; set; }
    }
}
