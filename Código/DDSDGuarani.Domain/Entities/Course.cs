using System;


namespace DDSDGuarani.Domain
{
    public class Course
    {
        public long IdSubject { get; set; }
        public long IdUser { get; set; }
        
        public Subject Subject { get; set; }      
        public User User { get; set; }

        public double CourseAverage { get; set; }
    }
}
