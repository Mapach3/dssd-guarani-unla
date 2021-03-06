﻿using DDSDGuarani.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DDSDGuarani.DTOResponse
{
    public class SubjectResponse
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public int Year { get; set; }
        public int Period { get; set; }
        public string WeekDay { get; set; }
        public SubjectShift Shift { get; set; }
        public string SubjectCode { get; set; }

        public List<CourseResponse> Courses { get; set; }
        public List<FinalCallResponse> Finals { get; set; }
        public InscriptionWindowResponse InscriptionWindow { get; set; }
        public CareerResponse Career { get; set; }
    }
}
