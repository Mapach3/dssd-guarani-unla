//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using AutoMapper;
//using DDSDGuarani.DTOResponse;
//using DDSDGuarani.Entities;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;

//namespace DDSDGuarani.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class CareerController : Controller
//    {

//        private readonly MyContext context;
//        private readonly IMapper _mapper;

//        public CareerController(MyContext context, IMapper mapper)
//        {
//            this.context = context;
//            this._mapper = mapper;
//        }


//        /// <summary>
//        /// Trae Listado de Materias
//        /// </summary>
//        [HttpGet]
//        public IEnumerable<CareerResponse> Get()
//        {
//            IEnumerable<SubjectResponse> response = new List<CareerResponse();
//            var resultDb = context.Career.Include(x => x.Finals).Include(x => x.EvaluationInstances).Include(x => x.Courses).ToList().OrderBy(x => x.Id);
//            response = _mapper.Map<IEnumerable<Subject>, IEnumerable<SubjectResponse>>(resultDb);
//            return response;
//        }

//        /// <summary>
//        /// Trae Materia por ID
//        /// </summary>
//        /// <param name="id"></param>  
//        [HttpGet("{id}")]
//        public SubjectResponse Get(int id)
//        {
//            SubjectResponse response = new SubjectResponse();
//            var resultDb = context.Subject.Include(x => x.Finals).Include(x => x.EvaluationInstances).Include(x => x.Courses).FirstOrDefault(u => u.Id == id);
//            response = _mapper.Map<Subject, SubjectResponse>(resultDb);
//            return response;
//        }


//    }
//}
