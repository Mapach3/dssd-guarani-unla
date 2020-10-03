using System;


namespace DDSDGuarani.Entities
{
    public class Course
    {
        public int IdSubject { get; set; }
        public int IdUser { get; set; }
        
        public Subject Subject { get; set; }      
        public User User { get; set; }

        public double CourseAverage { get; set; }
    }
}
