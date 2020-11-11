using AutoMapper;
using StudentModule.DTOResponse;
using StudentModule.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace StudentModule.Controllers
{
    [Route("api/[controller]")]
    public class InscriptionFinalController : Controller
    {
        private readonly MyContext context;
        private readonly IMapper _mapper;

        public InscriptionFinalController(MyContext context, IMapper mapper)
        {
            this.context = context;
            this._mapper = mapper;
        }

        /// <summary>
        /// Trae Listado de Inscripciones a Finales
        /// </summary>
        [HttpGet]
        public IEnumerable<InscriptionFinalResponse> Get()
        {
            IEnumerable<InscriptionFinalResponse> response = new List<InscriptionFinalResponse>();
            var resultDb = context.InscriptionFinal.Include(x => x.FinalCall).Include(x => x.User).ToList().OrderBy(x => x.UserId);
            response = _mapper.Map<IEnumerable<InscriptionFinal>, IEnumerable<InscriptionFinalResponse>>(resultDb);
            return response;
        }

        /// <summary>
        /// Trae Inscripcion a Final por ID
        /// </summary>
        /// <param name="id"></param>  
        [HttpGet("{id}")]
        public InscriptionFinalResponse Get(int id)
        {
            InscriptionFinalResponse response = new InscriptionFinalResponse();
            var resultDb = context.InscriptionFinal.Include(x => x.FinalCall).Include(x => x.User).FirstOrDefault(u => u.UserId == id);
            response = _mapper.Map<InscriptionFinal, InscriptionFinalResponse>(resultDb);
            return response;
        }

        /// <summary>
        /// Trae Inscripcion a Final por ID USER
        /// </summary>
        /// <param name="idUser"></param>  
        [HttpGet("[action]/{idUser}")]
        public InscriptionFinalResponseByUser GetByUser(int idUser)
        {
            InscriptionFinalResponseByUser response = new InscriptionFinalResponseByUser();
            var resultDb = context.InscriptionFinal.Include(x => x.FinalCall).ThenInclude(x=>x.InscriptionWindow)
                .Include(x => x.FinalCall).ThenInclude(x => x.InscriptionFinals)
                .Include(x => x.FinalCall).ThenInclude(x => x.Subject)
                .Include(x => x.FinalCall).ThenInclude(x => x.Subject).ThenInclude(x=>x.Career)
                .Include(x => x.FinalCall).ThenInclude(x => x.Subject).ThenInclude(x => x.Courses)
                .Include(x => x.FinalCall).ThenInclude(x => x.Subject).ThenInclude(x => x.InscriptionWindow)
                .Include(x => x.FinalCall).ThenInclude(x => x.Subject).ThenInclude(x => x.Finals)
                .Include(x => x.User).ThenInclude(x=>x.InscriptionFinals)
                .Include(x => x.User).ThenInclude(x => x.Courses)
                .FirstOrDefault(u => u.UserId == idUser);
            response = _mapper.Map<InscriptionFinal, InscriptionFinalResponseByUser>(resultDb);
            return response;
        }

        /// <summary>
        /// Inserta una Inscripcion de Final
        /// </summary>
        /// <param name="inscriptionFinal"></param>  
        [HttpPost]
        public ActionResult Post([FromBody] InscriptionFinal inscriptionFinal)
        {
            try
            {
                context.InscriptionFinal.Add(inscriptionFinal);
                context.SaveChanges();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        /// <summary>
        /// Modifica una Inscripcion de Final
        /// </summary>
        /// <param name="id"></param>
        /// <param name="inscriptionFinal"></param>
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] InscriptionFinal inscriptionFinal)
        {
            try
            {
                if (inscriptionFinal.UserId == id)
                {
                    context.Entry(inscriptionFinal).State = EntityState.Modified;
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
        /// Elimina una Inscripcion de Final
        /// </summary>
        /// <param name="id"></param>  
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                var inscriptionFinal = context.InscriptionFinal.FirstOrDefault(u => u.UserId == id);
                if (inscriptionFinal != null)
                {
                    context.InscriptionFinal.Remove(inscriptionFinal);
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
