using AutoMapper;

namespace DDSDGuarani.MappingProfiles
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            //#region Map Vuelo
            //CreateMap<Vuelo, VueloResponse>()
            //.ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.Id))
            //.ForMember(dest => dest.FechaIda, opts => opts.MapFrom(src => src.FechaIda))
            //.ForMember(dest => dest.FechaVuelta, opts => opts.MapFrom(src => src.FechaVuelta))
            //.ForMember(dest => dest.NombreAereolinea, opts => opts.MapFrom(src => src.NombreAereolinea))
            //.ForMember(dest => dest.IdaVuelta, opts => opts.MapFrom(src => src.IdaVuelta))
            //.ForMember(dest => dest.ValoracionAereolinea, opts => opts.MapFrom(src => src.ValoracionAereolinea))
            //.ForMember(dest => dest.Clase, opts => opts.MapFrom(src => src.Clase))
            //.ForMember(dest => dest.ConEscala, opts => opts.MapFrom(src => src.ConEscala))
            //.ForMember(dest => dest.AccesoDiscapacitados, opts => opts.MapFrom(src => src.AccesoDiscapacitados))
            //.ForMember(dest => dest.Precio, opts => opts.MapFrom(src => src.Precio))
            //.ForMember(dest => dest.Link, opts => opts.MapFrom(src => src.Link))

            //.ForPath(dest => dest.Origen, opts => opts.MapFrom(src => new DestinoResponse
            //{
            //    Id = src.OrigenNavigation.Id,
            //    Ciudad = src.OrigenNavigation.Ciudad,
            //    Pais = src.OrigenNavigation.Pais,
            //    Region = src.OrigenNavigation.Region
            //}))
            //.ForPath(dest => dest.Destino, opts => opts.MapFrom(src => new DestinoResponse
            //{
            //    Id = src.DestinoNavigation.Id,
            //    Ciudad = src.DestinoNavigation.Ciudad,
            //    Pais = src.DestinoNavigation.Pais,
            //    Region = src.DestinoNavigation.Region
            //}));
            //#endregion
        }
    }
}
