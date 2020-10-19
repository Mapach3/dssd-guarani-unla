using AutoMapper;
using DDSDGuarani.DTOResponse;
using DDSDGuarani.Entities;
using System.Collections.Generic;

namespace DDSDGuarani.MappingProfiles
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            #region Map User
            CreateMap<User, UserResponse>()
            .ForMember(dest => dest.IdUser, opts => opts.MapFrom(src => src.IdUser))
            .ForMember(dest => dest.Name, opts => opts.MapFrom(src => src.Name))
            .ForMember(dest => dest.Password, opts => opts.MapFrom(src => src.Password))
            .ForMember(dest => dest.PasswordChanged, opts => opts.MapFrom(src => src.PasswordChanged))
            .ForMember(dest => dest.Dni, opts => opts.MapFrom(src => src.Dni))
            .ForMember(dest => dest.Email, opts => opts.MapFrom(src => src.Email))
            .ForMember(dest => dest.Surname, opts => opts.MapFrom(src => src.Surname))
            .ForMember(dest => dest.Active, opts => opts.MapFrom(src => src.Active))
            .ForMember(dest => dest.Role, opts => opts.MapFrom(src => src.Role))

            .ForPath(dest => dest.Address, opts => opts.MapFrom(src => new AddressResponse
            {
                City = src.Address.City,
                Country = src.Address.Country,
                IdAddress = src.Address.IdAddress,
                Location = src.Address.Location,
                PostalCode = src.Address.PostalCode,
                StreetAndNumber = src.Address.StreetAndNumber
            }))

            .AfterMap((src, dest) =>
            {
                List<CourseResponse> coursesAux = new List<CourseResponse>();
                List<InscriptionFinalResponse> inscriptionFinalsAux = new List<InscriptionFinalResponse>();
                List<EvaluationInstanceResponse> evaluationInstancesAux = new List<EvaluationInstanceResponse>();

                src.UserCourses.ForEach(x =>
                {
                    coursesAux.Add(new CourseResponse
                    {
                        IdUser = x.IdUser,
                        IdSubject = x.IdSubject,
                        CourseAverage = x.CourseAverage
                    });
                });

                src.UserInscriptionFinals.ForEach(x =>
                {
                    inscriptionFinalsAux.Add(new InscriptionFinalResponse
                    {
                        IdFinal = x.IdFinal,
                        IdUser = x.IdUser
                    });
                });

                src.UserEvaluations.ForEach(x =>
                {
                    evaluationInstancesAux.Add(new EvaluationInstanceResponse
                    {
                        IdEvaluationInstance = x.IdEvaluationInstance,
                        Date = x.Date,
                        Score = x.Score,
                        Subject = x.Subject.IdSubject,
                        Type = x.Type,
                        User = x.User.IdUser
                    });
                });

                dest.UserCourses = coursesAux;
                dest.UserEvaluations = evaluationInstancesAux;
                dest.UserInscriptionFinals = inscriptionFinalsAux;
            });
            #endregion

            #region Map Subject
            CreateMap<Subject, SubjectResponse>()
            .ForMember(dest => dest.IdSubject, opts => opts.MapFrom(src => src.IdSubject))
            .ForMember(dest => dest.Name, opts => opts.MapFrom(src => src.Name))
            .ForMember(dest => dest.StartTime, opts => opts.MapFrom(src => src.StartTime))
            .ForMember(dest => dest.EndTime, opts => opts.MapFrom(src => src.EndTime))
            .ForMember(dest => dest.Year, opts => opts.MapFrom(src => src.Year))
            .ForMember(dest => dest.Period, opts => opts.MapFrom(src => src.Period))
            .ForMember(dest => dest.Shift, opts => opts.MapFrom(src => src.Shift))

            .ForPath(dest => dest.InscriptionWindow, opts => opts.MapFrom(src => new InscriptionWindowResponse
            {
                IdInscriptionWindow = src.InscriptionWindow.IdInscriptionWindow,
                EndDate = src.InscriptionWindow.EndDate,
                StartDate = src.InscriptionWindow.StartDate
            }))

            .AfterMap((src, dest) =>
            {
                List<CourseResponse> coursesAux = new List<CourseResponse>();
                List<FinalCallResponse> inscriptionFinalsAux = new List<FinalCallResponse>();
                List<EvaluationInstanceResponse> evaluationInstancesAux = new List<EvaluationInstanceResponse>();

                List<InscriptionFinalResponse> inscriptionFinalsAux_InFinalCall = new List<InscriptionFinalResponse>();

                src.SubjectFinals.ForEach(x =>
                {
                    x.FinallCallInscriptionFinals.ForEach(y =>
                    {
                        inscriptionFinalsAux_InFinalCall.Add(new InscriptionFinalResponse { IdFinal = y.IdFinal, IdUser = y.IdUser });
                    });
                });

                src.SubjectCourses.ForEach(x =>
                {
                    coursesAux.Add(new CourseResponse
                    {
                        IdUser = x.IdUser,
                        IdSubject = x.IdSubject,
                        CourseAverage = x.CourseAverage
                    });
                });

                src.SubjectFinals.ForEach(x =>
                {
                    inscriptionFinalsAux.Add(new FinalCallResponse
                    {
                        IdFinalCall = x.IdFinalCall,
                        Date = x.Date,
                        Subject = x.Subject.IdSubject,
                        InscriptionWindow = new InscriptionWindowResponse { IdInscriptionWindow = x.InscriptionWindow.IdInscriptionWindow, EndDate = x.InscriptionWindow.EndDate, StartDate = x.InscriptionWindow.StartDate },
                        FinallCallInscriptionFinals = inscriptionFinalsAux_InFinalCall
                    });
                });

                src.SubjectEvaluations.ForEach(x =>
                {
                    evaluationInstancesAux.Add(new EvaluationInstanceResponse
                    {
                        IdEvaluationInstance = x.IdEvaluationInstance,
                        Date = x.Date,
                        Score = x.Score,
                        Subject = x.Subject.IdSubject,
                        Type = x.Type,
                        User = x.User.IdUser
                    });
                });

                dest.SubjectCourses = coursesAux;
                dest.SubjectEvaluations = evaluationInstancesAux;
                dest.SubjectFinals = inscriptionFinalsAux;
            });
            #endregion

            #region Map InscriptionWindow
            CreateMap<InscriptionWindow, InscriptionWindowResponse>()
            .ForMember(dest => dest.IdInscriptionWindow, opts => opts.MapFrom(src => src.IdInscriptionWindow))
            .ForMember(dest => dest.StartDate, opts => opts.MapFrom(src => src.StartDate))
            .ForMember(dest => dest.EndDate, opts => opts.MapFrom(src => src.EndDate));
            #endregion

            #region Map InscriptionFinal
            CreateMap<InscriptionFinal, InscriptionFinalResponse>()
            .ForMember(dest => dest.IdFinal, opts => opts.MapFrom(src => src.IdFinal))
            .ForMember(dest => dest.IdUser, opts => opts.MapFrom(src => src.IdUser));
            #endregion

            #region Map FinalCall
            CreateMap<FinalCall, FinalCallResponse>()
            .ForMember(dest => dest.IdFinalCall, opts => opts.MapFrom(src => src.IdFinalCall))
            .ForMember(dest => dest.Date, opts => opts.MapFrom(src => src.Date))
            .ForMember(dest => dest.Subject, opts => opts.MapFrom(src => src.Subject.IdSubject))

            .ForPath(dest => dest.InscriptionWindow, opts => opts.MapFrom(src => new InscriptionWindowResponse
            {
                IdInscriptionWindow = src.InscriptionWindow.IdInscriptionWindow,
                EndDate = src.InscriptionWindow.EndDate,
                StartDate = src.InscriptionWindow.StartDate
            }))

            .AfterMap((src, dest) =>
            {
                List<InscriptionFinalResponse> inscriptionFinalsAux = new List<InscriptionFinalResponse>();
                src.FinallCallInscriptionFinals.ForEach(x =>
                {
                   inscriptionFinalsAux.Add(new InscriptionFinalResponse { IdFinal = x.IdFinal, IdUser = x.IdUser });
                });

                dest.FinallCallInscriptionFinals = inscriptionFinalsAux;
            });

            #endregion

            #region Map EvaluationInstance
            CreateMap<EvaluationInstance, EvaluationInstanceResponse>()
            .ForMember(dest => dest.IdEvaluationInstance, opts => opts.MapFrom(src => src.IdEvaluationInstance))
            .ForMember(dest => dest.Score, opts => opts.MapFrom(src => src.Score))
            .ForMember(dest => dest.Date, opts => opts.MapFrom(src => src.Date))
            .ForMember(dest => dest.Type, opts => opts.MapFrom(src => src.Type))
            .ForMember(dest => dest.Subject, opts => opts.MapFrom(src => src.Subject.IdSubject))
            .ForMember(dest => dest.User, opts => opts.MapFrom(src => src.User.IdUser));
            #endregion

            #region Map Address
            CreateMap<Address, AddressResponse>()
            .ForMember(dest => dest.IdAddress, opts => opts.MapFrom(src => src.IdAddress))
            .ForMember(dest => dest.StreetAndNumber, opts => opts.MapFrom(src => src.StreetAndNumber))
            .ForMember(dest => dest.Location, opts => opts.MapFrom(src => src.Location))
            .ForMember(dest => dest.City, opts => opts.MapFrom(src => src.City))
            .ForMember(dest => dest.Country, opts => opts.MapFrom(src => src.Country))
            .ForMember(dest => dest.PostalCode, opts => opts.MapFrom(src => src.PostalCode));
            #endregion

            #region Map Course
            CreateMap<Course, CourseResponse>()
            .ForMember(dest => dest.IdUser, opts => opts.MapFrom(src => src.IdUser))
            .ForMember(dest => dest.IdSubject, opts => opts.MapFrom(src => src.IdSubject))
            .ForMember(dest => dest.CourseAverage, opts => opts.MapFrom(src => src.CourseAverage));
            #endregion
        }
    }
}
