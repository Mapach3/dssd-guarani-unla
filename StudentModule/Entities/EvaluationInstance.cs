//using StudentModule.Enums;
//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations;
//using System.ComponentModel.DataAnnotations.Schema;

//namespace StudentModule.Entities
//{
//    public class EvaluationInstance
//    {
//        public int Id { get; set; }
//        public double Score { get; set; }
//        public DateTime Date { get; set; }
//        public EIType Type { get; set; }

//        //Relation - ManyToOne - Subject
//        public int SubjectId { get; set; }
//        public Subject Subject { get; set; }

//        //Relation - ManyToOne - User
//        public int UserId { get; set; }
//        public User User { get; set; }
//    }
//}
