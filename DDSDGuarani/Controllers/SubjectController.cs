using AutoMapper;
using DDSDGuarani.DTOResponse;
using DDSDGuarani.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DDSDGuarani.Controllers
{
    [Route("api/[controller]")]
    public class SubjectController : Controller
    {
        private readonly MyContext context;
        private readonly IMapper _mapper;

        public SubjectController(MyContext context, IMapper mapper)
        {
            this.context = context;
            this._mapper = mapper;
        }

        /// <summary>
        /// Trae Listado de Materias
        /// </summary>
        [HttpGet]
        public IEnumerable<SubjectResponse> Get()
        {
            IEnumerable<SubjectResponse> response = new List<SubjectResponse>();
            var resultDb = context.Subject.Include(x => x.Finals).Include(x => x.EvaluationInstances).Include(x => x.Courses).ToList().OrderBy(x => x.Id);
            response = _mapper.Map<IEnumerable<Subject>, IEnumerable<SubjectResponse>>(resultDb);
            return response;
        }

        /// <summary>
        /// Trae Materia por ID
        /// </summary>
        /// <param name="id"></param>  
        [HttpGet("{id}")]
        public SubjectResponse Get(int id)
        {
            SubjectResponse response = new SubjectResponse();
            var resultDb = context.Subject.Include(x => x.Finals).Include(x => x.EvaluationInstances).Include(x => x.Courses).FirstOrDefault(u => u.Id == id);
            response = _mapper.Map<Subject, SubjectResponse>(resultDb);
            return response;
        }

        /// <summary>
        /// Inserta una Materia
        /// </summary>
        /// <param name="subject"></param>  
        [HttpPost]
        public ActionResult Post([FromBody] Subject subject)
        {
            try
            {
                context.Subject.Add(subject);
                context.SaveChanges();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        /// <summary>
        /// Modifica una Materia
        /// </summary>
        /// <param name="id"></param>
        /// <param name="subject"></param>
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Subject subject)
        {
            try
            {
                if (subject.Id == id)
                {
                    context.Entry(subject).State = EntityState.Modified;
                    context.SaveChanges();
                    return Ok();
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        /// <summary>
        /// Elimina una Materia
        /// </summary>
        /// <param name="id"></param>  
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                var subject = context.Subject.FirstOrDefault(u => u.Id == id);
                if (subject != null)
                {
                    context.Subject.Remove(subject);
                    context.SaveChanges();
                    return Ok();
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}
