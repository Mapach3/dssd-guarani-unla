//using AutoMapper;
//using DDSDGuarani.DTOResponse;
//using DDSDGuarani.Entities;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using System;
//using System.Collections.Generic;
//using System.Linq;

//namespace DDSDGuarani.Controllers
//{
//    [Route("api/[controller]")]
//    public class EvaluationInstanceController : Controller
//    {
//        private readonly MyContext context;
//        private readonly IMapper _mapper;

//        public EvaluationInstanceController(MyContext context, IMapper mapper)
//        {
//            this.context = context;
//            _mapper = mapper;
//        }

//        /// <summary>
//        /// Trae Listado de Instancias de Evaluacion
//        /// </summary>
//        [HttpGet]
//        public IEnumerable<EvaluationInstanceResponse> Get()
//        {
//            IEnumerable<EvaluationInstanceResponse> response = new List<EvaluationInstanceResponse>();
//            var resultDb = context.EvaluationInstance.Include(x => x.Subject).Include(x => x.User).ToList().OrderBy(x => x.Id);
//            response = _mapper.Map<IEnumerable<EvaluationInstance>, IEnumerable<EvaluationInstanceResponse>>(resultDb);
//            return response;
//        }

//        /// <summary>
//        /// Trae Instancia de Evaluacion por ID
//        /// </summary>
//        /// <param name="id"></param>  
//        [HttpGet("{id}")]
//        public EvaluationInstanceResponse Get(int id)
//        {
//            EvaluationInstanceResponse response = new EvaluationInstanceResponse();
//            var resultDb = context.EvaluationInstance.Include(x => x.Subject).Include(x => x.User).FirstOrDefault(u => u.Id == id);
//            response = _mapper.Map<EvaluationInstance, EvaluationInstanceResponse>(resultDb);
//            return response;
//        }

//        /// <summary>
//        /// Trae Instancias de Evaluacion de Usuario
//        /// </summary>
//        /// <param name="userId"></param>  
//        [HttpGet("finals/{userId}")]
//        public IEnumerable<EvaluationInstanceResponse> GetByUser(int userId)
//        {
//            IEnumerable<EvaluationInstanceResponse> response = new List<EvaluationInstanceResponse>();
//            var resultDb = context.EvaluationInstance.Include(x => x.Subject).Include(x => x.User).ToList().Where(u => u.UserId == userId);
//            response = _mapper.Map<IEnumerable<EvaluationInstance>, IEnumerable<EvaluationInstanceResponse>>(resultDb);
//            return response;
//        }

//        /// <summary>
//        /// Inserta una Instancia de Evaluacion
//        /// </summary>
//        /// <param name="evaluationInstance"></param>  
//        [HttpPost]
//        public ActionResult Post([FromBody] EvaluationInstance evaluationInstance)
//        {
//            try
//            {
//                context.EvaluationInstance.Add(evaluationInstance);
//                context.SaveChanges();
//                return Ok();
//            }
//            catch (Exception e)
//            {
//                return BadRequest(e.Message);
//            }
//        }


//        /// <summary>
//        /// Modifica una Instancia de Evaluacion
//        /// </summary>
//        /// <param name="id"></param>
//        /// <param name="evaluationInstance"></param>
//        [HttpPut("{id}")]
//        public ActionResult Put(int id, [FromBody] EvaluationInstance evaluationInstance)
//        {
//            try
//            {
//                if (evaluationInstance.Id == id)
//                {
//                    context.Entry(evaluationInstance).State = EntityState.Modified;
//                    context.SaveChanges();
//                    return Ok();
//                }
//                else
//                {
//                    return BadRequest();
//                }
//            }
//            catch (Exception e)
//            {

//                return BadRequest(e.Message);
//            }
//        }

//        /// <summary>
//        /// Elimina una Instancia de Evaluacion
//        /// </summary>
//        /// <param name="id"></param>  
//        [HttpDelete("{id}")]
//        public ActionResult Delete(int id)
//        {
//            try
//            {
//                var evaluationInstance = context.EvaluationInstance.FirstOrDefault(u => u.Id == id);
//                if (evaluationInstance != null)
//                {
//                    context.EvaluationInstance.Remove(evaluationInstance);
//                    context.SaveChanges();
//                    return Ok();
//                }
//                else
//                {
//                    return BadRequest();
//                }
//            }
//            catch (Exception e)
//            {

//                return BadRequest(e.Message);
//            }
//        }
//    }
//}
