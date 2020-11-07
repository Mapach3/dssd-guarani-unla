using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DDSDGuarani.Entities
{
    public class Career
    {
        public int Id { get; set; }
        public string Name { get; set; }

        //Relation - OneToMany - Subject
        public int SubjectId { get; set; }
        public List<Subject> Subjects { get; set; } = new List<Subject>();
    }
}
