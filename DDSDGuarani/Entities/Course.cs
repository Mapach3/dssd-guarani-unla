﻿using System;


namespace DDSDGuarani.Entities
{
    public class Course
    {
        public double CourseAverage { get; set; }
        public bool InscriptionReminder { get; set; }

        //Relation - ManyToOne - Subject
        public int SubjectId { get; set; }
        public Subject Subject { get; set; }

        //Relation - ManyToOne - User
        public int UserId { get; set; }     
        public User User { get; set; } 
    }
}
