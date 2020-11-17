using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DDSDGuarani.DTOResponse;
using DDSDGuarani.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;


namespace DDSDGuarani.Controllers
{
    [Route("api/[controller]")]
    public class SubjectCodesController : Controller
    {
        private readonly MyContext context;
        private readonly IMapper _mapper;
        private readonly IConfiguration configuration;

        public SubjectCodesController(MyContext context, IMapper mapper, IConfiguration iConfig)
        {
            this.context = context;
            this._mapper = mapper;
            this.configuration = iConfig;
        }

        /// <summary>
        /// Trae Listado de SubjectCodes
        /// </summary>
        [HttpGet]
        public IEnumerable<SubjectCodesResponse> Get()
        {
            IEnumerable<SubjectCodesResponse> response = new List<SubjectCodesResponse>();
            var resultDb = context.SubjectCodes.ToList();
            response = _mapper.Map<IEnumerable<SubjectCodes>, IEnumerable<SubjectCodesResponse>>(resultDb);
            return response;
        }

        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

    }
}
