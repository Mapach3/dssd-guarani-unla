using System;


namespace StudentModule.Entities
{
    public class Course
    {
        public double CourseAverage { get; set; }

        //Relation - ManyToOne - Subject
        public int SubjectId { get; set; }
        public Subject Subject { get; set; }

        //Relation - ManyToOne - User
        public int UserId { get; set; }     
        public User User { get; set; } 
    }
}
