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
                StreetAndNumber = src.Address.StreetAndNumber,
                User = src.Address.User.IdUser
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
        }
    }
}
