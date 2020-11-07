using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DDSDGuarani.DTOResponse;
using DDSDGuarani.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DDSDGuarani.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CareerController : Controller
    {

        private readonly MyContext context;
        private readonly IMapper _mapper;

        public CareerController(MyContext context, IMapper mapper)
        {
            this.context = context;
            this._mapper = mapper;
        }

        /// <summary>
        /// Trae Listado de Carreras
        /// </summary>
        [HttpGet]
        public IEnumerable<CareerResponse> Get()
        {
            IEnumerable<CareerResponse> response = new List<CareerResponse>();
            var resultDb = context.Career.ToList().OrderBy(x => x.Id);
            response = _mapper.Map<IEnumerable<Career>, IEnumerable<CareerResponse>>(resultDb);
            return response;
        }

        /// <summary>
        /// Trae Carrera por ID
        /// </summary>
        /// <param name="id"></param>  
        [HttpGet("{id}")]
        public CareerResponse Get(int id)
        {
            CareerResponse response = new CareerResponse();
            var resultDb = context.Career.FirstOrDefault(u => u.Id == id);
            response = _mapper.Map<Career, CareerResponse>(resultDb);
            return response;
        }
    }
}
