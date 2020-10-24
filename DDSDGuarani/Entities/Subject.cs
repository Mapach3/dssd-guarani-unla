﻿using DDSDGuarani.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DDSDGuarani.Entities
{
    public class Subject
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public int Year { get; set; }
        public int Period { get; set; }
        public SubjectShift Shift { get; set; }

        //Relation - OneToMany - Course (Muchos a muchos con User, Course es la intermedia)
        public List<Course> Courses { get; set; } = new List<Course>();

        //Relation - OneToMany - EvaluationInstance
        public List<EvaluationInstance> EvaluationInstances { get; set; } = new List<EvaluationInstance>();

        //Relation - OneToMany - FinalCall
        public List<FinalCall> Finals { get; set; } = new List<FinalCall>();
    }
}