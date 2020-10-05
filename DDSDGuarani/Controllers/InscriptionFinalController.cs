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
            var resultDb = context.InscriptionFinal.ToList().OrderBy(x => x.IdFinal);
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
            var resultDb = context.InscriptionFinal.FirstOrDefault(u => u.IdFinal == id);
            response = _mapper.Map<InscriptionFinal, InscriptionFinalResponse>(resultDb);
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
                if (inscriptionFinal.IdFinal == id)
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
                var inscriptionFinal = context.InscriptionFinal.FirstOrDefault(u => u.IdFinal == id);
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
