﻿using AutoMapper;
using DDSDGuarani.DTOResponse;
using DDSDGuarani.Entities;
using Microsoft.AspNetCore.Routing.Constraints;
using System.Collections.Generic;

namespace DDSDGuarani.MappingProfiles
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            #region Map User
            CreateMap<User, UserResponse>()
            .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.Id))
            .ForMember(dest => dest.Name, opts => opts.MapFrom(src => src.Name))
            .ForMember(dest => dest.UserName, opts => opts.MapFrom(src => src.UserName))
            .ForMember(dest => dest.Password, opts => opts.MapFrom(src => src.Password))
            .ForMember(dest => dest.PasswordChanged, opts => opts.MapFrom(src => src.PasswordChanged))
            .ForMember(dest => dest.Dni, opts => opts.MapFrom(src => src.Dni))
            .ForMember(dest => dest.Email, opts => opts.MapFrom(src => src.Email))
            .ForMember(dest => dest.Surname, opts => opts.MapFrom(src => src.Surname))
            .ForMember(dest => dest.Active, opts => opts.MapFrom(src => src.Active))
            .ForMember(dest => dest.Role, opts => opts.MapFrom(src => src.Role))
            .ForMember(dest => dest.ImgBase64, opts => opts.MapFrom(src => src.ImgBase64))

            .ForPath(dest => dest.Address, opts => opts.MapFrom(src => new AddressResponse
            {
                City = src.Address.City,
                Country = src.Address.Country,
                Id = src.Address.Id,
                Location = src.Address.Location,
                PostalCode = src.Address.PostalCode,
                StreetAndNumber = src.Address.StreetAndNumber,
                User = src.Address.User.Id
            }))

            .ForPath(dest => dest.Career, opts => opts.MapFrom(src => new CareerResponse
            {
                Id = src.Career.Id,
                Name = src.Career.Name
            }))

            .AfterMap((src, dest) =>
            {
                List<CourseResponse> coursesAux = new List<CourseResponse>();
                List<InscriptionFinalResponse> inscriptionFinalsAux = new List<InscriptionFinalResponse>();
               // List<EvaluationInstanceResponse> evaluationInstancesAux = new List<EvaluationInstanceResponse>();

                src.Courses.ForEach(x =>
                {
                    coursesAux.Add(new CourseResponse
                    {
                        UserId = x.UserId,
                        SubjectId = x.SubjectId,
                        CourseAverage = x.CourseAverage,
                        InscriptionReminder = x.InscriptionReminder
                    });
                });

                src.InscriptionFinals.ForEach(x =>
                {
                    inscriptionFinalsAux.Add(new InscriptionFinalResponse
                    {
                        FinalId = x.FinalId,
                        UserId = x.UserId,
                        Score= x.Score,
                        InscriptionReminder = x.InscriptionReminder
                    });
                });

                //src.EvaluationInstances.ForEach(x =>
                //{
                //    evaluationInstancesAux.Add(new EvaluationInstanceResponse
                //    {
                //        Id = x.Id,
                //        Date = x.Date,
                //        Score = x.Score,
                //        Subject = x.SubjectId,
                //        Type = x.Type,
                //        User = x.UserId
                //    });
                //});

                dest.Courses = coursesAux;
               // dest.EvaluationInstances = evaluationInstancesAux;
                dest.InscriptionFinals = inscriptionFinalsAux;
            });
            #endregion

            #region Map Subject
            CreateMap<Subject, SubjectResponse>()
            .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.Id))
            .ForMember(dest => dest.Name, opts => opts.MapFrom(src => src.Name))
            .ForMember(dest => dest.StartTime, opts => opts.MapFrom(src => src.StartTime))
            .ForMember(dest => dest.EndTime, opts => opts.MapFrom(src => src.EndTime))
            .ForMember(dest => dest.WeekDay, opts => opts.MapFrom(src => src.WeekDay))
            .ForMember(dest => dest.Year, opts => opts.MapFrom(src => src.Year))
            .ForMember(dest => dest.Period, opts => opts.MapFrom(src => src.Period))
            .ForMember(dest => dest.Shift, opts => opts.MapFrom(src => src.Shift))
            .ForMember(dest => dest.SubjectCode, opts => opts.MapFrom(src => src.SubjectCode))

            .ForPath(dest => dest.InscriptionWindow, opts => opts.MapFrom(src => new InscriptionWindowResponse
            {
                Id = src.InscriptionWindow.Id,
                EndDate = src.InscriptionWindow.EndDate,
                StartDate = src.InscriptionWindow.StartDate
            }))

             .ForPath(dest => dest.Career, opts => opts.MapFrom(src => new CareerResponse
             {
                 Id = src.Career.Id,
                 Name = src.Career.Name
             }))

            .AfterMap((src, dest) =>
            {
                List<CourseResponse> coursesAux = new List<CourseResponse>();
                List<FinalCallResponse> inscriptionFinalsAux = new List<FinalCallResponse>();

                List<InscriptionFinalResponse> inscriptionFinalsAux_InFinalCall = new List<InscriptionFinalResponse>();

                src.Finals.ForEach(x =>
                {
                    x.InscriptionFinals.ForEach(y =>
                    {
                        inscriptionFinalsAux_InFinalCall.Add(new InscriptionFinalResponse { FinalId = y.FinalId, UserId = y.UserId, Score = y.Score, InscriptionReminder = y.InscriptionReminder});
                    });
                });

                src.Courses.ForEach(x =>
                {
                    coursesAux.Add(new CourseResponse
                    {
                        UserId = x.UserId,
                        SubjectId = x.SubjectId,
                        CourseAverage = x.CourseAverage
                    });
                });

                src.Finals.ForEach(x =>
                {
                    inscriptionFinalsAux.Add(new FinalCallResponse
                    {
                        Id = x.Id,
                        Date = x.Date,
                        Subject = x.SubjectId,
                        InscriptionWindow = new InscriptionWindowResponse { Id = x.InscriptionWindow.Id, EndDate = x.InscriptionWindow.EndDate, StartDate = x.InscriptionWindow.StartDate },
                        InscriptionFinals = inscriptionFinalsAux_InFinalCall,
                        Active = x.Active
                    });
                });

                //src.EvaluationInstances.ForEach(x =>
                //{
                //    evaluationInstancesAux.Add(new EvaluationInstanceResponse
                //    {
                //        Id = x.Id,
                //        Date = x.Date,
                //        Score = x.Score,
                //        Subject = x.SubjectId,
                //        Type = x.Type,
                //        User = x.UserId
                //    });
                //});

                dest.Courses = coursesAux;
               // dest.EvaluationInstances = evaluationInstancesAux;
                dest.Finals = inscriptionFinalsAux;
            });
            #endregion

            #region Map SubjectCodes
            CreateMap<SubjectCodes, SubjectCodesResponse>()
            .ForMember(dest => dest.Code, opts => opts.MapFrom(src => src.Code))
            .ForMember(dest => dest.SubjectName, opts => opts.MapFrom(src => src.SubjectName));

            #endregion

            #region Map InscriptionWindow
            CreateMap<InscriptionWindow, InscriptionWindowResponse>()
            .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.Id))
            .ForMember(dest => dest.StartDate, opts => opts.MapFrom(src => src.StartDate))
            .ForMember(dest => dest.EndDate, opts => opts.MapFrom(src => src.EndDate));
            #endregion

            #region Map InscriptionFinal
            CreateMap<InscriptionFinal, InscriptionFinalResponse>()
            .ForMember(dest => dest.FinalId, opts => opts.MapFrom(src => src.FinalId))
            .ForMember(dest => dest.UserId, opts => opts.MapFrom(src => src.UserId))
            .ForMember(dest => dest.InscriptionReminder, opts => opts.MapFrom(src => src.InscriptionReminder))
            .ForMember(dest => dest.Score, opts => opts.MapFrom(src => src.Score));
            #endregion

            #region Map FinalCall
            CreateMap<FinalCall, FinalCallResponse>()
            .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.Id))
            .ForMember(dest => dest.Date, opts => opts.MapFrom(src => src.Date))
            .ForMember(dest => dest.Subject, opts => opts.MapFrom(src => src.SubjectId))
            .ForMember(dest => dest.Active, opts => opts.MapFrom(src => src.Active))

            .ForPath(dest => dest.InscriptionWindow, opts => opts.MapFrom(src => new InscriptionWindowResponse
            {
                Id = src.InscriptionWindow.Id,
                EndDate = src.InscriptionWindow.EndDate,
                StartDate = src.InscriptionWindow.StartDate
            }))

            .AfterMap((src, dest) =>
            {
                List<InscriptionFinalResponse> inscriptionFinalsAux = new List<InscriptionFinalResponse>();
                src.InscriptionFinals.ForEach(x =>
                {
                    inscriptionFinalsAux.Add(new InscriptionFinalResponse { FinalId = x.FinalId, UserId = x.UserId, Score = x.Score, InscriptionReminder = x.InscriptionReminder });
                });

                dest.InscriptionFinals = inscriptionFinalsAux;
            });

            #endregion

            #region Map EvaluationInstance  DELETE!
            //CreateMap<EvaluationInstance, EvaluationInstanceResponse>()
            //.ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.Id))
            //.ForMember(dest => dest.Score, opts => opts.MapFrom(src => src.Score))
            //.ForMember(dest => dest.Date, opts => opts.MapFrom(src => src.Date))
            //.ForMember(dest => dest.Type, opts => opts.MapFrom(src => src.Type))
            //.ForMember(dest => dest.Subject, opts => opts.MapFrom(src => src.SubjectId))
            //.ForMember(dest => dest.User, opts => opts.MapFrom(src => src.UserId));
            #endregion

            #region Map Address
            CreateMap<Address, AddressResponse>()
            .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.Id))
            .ForMember(dest => dest.StreetAndNumber, opts => opts.MapFrom(src => src.StreetAndNumber))
            .ForMember(dest => dest.Location, opts => opts.MapFrom(src => src.Location))
            .ForMember(dest => dest.City, opts => opts.MapFrom(src => src.City))
            .ForMember(dest => dest.Country, opts => opts.MapFrom(src => src.Country))
            .ForMember(dest => dest.User, opts => opts.MapFrom(src => src.User.Id))
            .ForMember(dest => dest.PostalCode, opts => opts.MapFrom(src => src.PostalCode));
            #endregion

            #region Map Course
            CreateMap<Course, CourseResponse>()
            .ForMember(dest => dest.UserId, opts => opts.MapFrom(src => src.UserId))
            .ForMember(dest => dest.SubjectId, opts => opts.MapFrom(src => src.SubjectId))
            .ForMember(dest => dest.CourseAverage, opts => opts.MapFrom(src => src.CourseAverage))
            .ForMember(dest => dest.InscriptionReminder, opts => opts.MapFrom(src => src.InscriptionReminder));
            #endregion

            #region Map Career
            CreateMap<Career, CareerResponse>()
             .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.Id))
             .ForMember(dest => dest.Name, opts => opts.MapFrom(src => src.Name));
            #endregion
        }
    }
}
