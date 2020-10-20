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
    public class InscriptionWindowController : Controller
    {
        private readonly MyContext context;
        private readonly IMapper _mapper;

        public InscriptionWindowController(MyContext context, IMapper mapper)
        {
            this.context = context;
            this._mapper = mapper;
        }

        /// <summary>
        /// Trae Listado de Ventana de Inscripciones
        /// </summary>
        [HttpGet]
        public IEnumerable<InscriptionWindowResponse> Get()
        {
            IEnumerable<InscriptionWindowResponse> response = new List<InscriptionWindowResponse>();
            var resultDb = context.InscriptionWindow.Include(x => x.Finals).ToList().OrderBy(x => x.Id);
            response = _mapper.Map<IEnumerable<InscriptionWindow>, IEnumerable<InscriptionWindowResponse>>(resultDb);
            return response;
        }

        /// <summary>
        /// Trae Ventana de Inscripcion por ID
        /// </summary>
        /// <param name="id"></param>  
        [HttpGet("{id}")]
        public InscriptionWindowResponse Get(int id)
        {
            InscriptionWindowResponse response = new InscriptionWindowResponse();
            var resultDb = context.InscriptionWindow.Include(x => x.Finals).FirstOrDefault(u => u.Id == id);
            response = _mapper.Map<InscriptionWindow, InscriptionWindowResponse>(resultDb);
            return response;
        }

        /// <summary>
        /// Inserta una Ventana de Inscripcion
        /// </summary>
        /// <param name="inscriptionWindow"></param>  
        [HttpPost]
        public ActionResult Post([FromBody] InscriptionWindow inscriptionWindow)
        {
            try
            {
                context.InscriptionWindow.Add(inscriptionWindow);
                context.SaveChanges();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        /// <summary>
        /// Modifica una Inscripcion
        /// </summary>
        /// <param name="id"></param>
        /// <param name="inscriptionWindow"></param>
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] InscriptionWindow inscriptionWindow)
        {
            try
            {
                if (inscriptionWindow.Id == id)
                {
                    context.Entry(inscriptionWindow).State = EntityState.Modified;
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
        /// Elimina una Inscripcion
        /// </summary>
        /// <param name="id"></param>  
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                var inscriptionWindow = context.InscriptionWindow.FirstOrDefault(u => u.Id == id);
                if (inscriptionWindow != null)
                {
                    context.InscriptionWindow.Remove(inscriptionWindow);
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
