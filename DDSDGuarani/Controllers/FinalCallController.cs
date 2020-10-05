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
    public class FinalCallController : Controller
    {
        private readonly MyContext context;
        private readonly IMapper _mapper;

        public FinalCallController(MyContext context, IMapper mapper)
        {
            this.context = context;
            _mapper = mapper;
        }

        /// <summary>
        /// Trae Listado de Llamados de Finales
        /// </summary>
        [HttpGet]
        public IEnumerable<FinalCallResponse> Get()
        {
            IEnumerable<FinalCallResponse> response = new List<FinalCallResponse>();
            var resultDb = context.FinalCall.ToList().OrderBy(x => x.IdFinalCall);
            response = _mapper.Map<IEnumerable<FinalCall>, IEnumerable<FinalCallResponse>>(resultDb);
            return response;
        }

        /// <summary>
        /// Trae Llamado a Final por ID
        /// </summary>
        /// <param name="id"></param>  
        [HttpGet("{id}")]
        public FinalCallResponse Get(int id)
        {
            FinalCallResponse response = new FinalCallResponse();
            var resultDb = context.FinalCall.FirstOrDefault(u => u.IdFinalCall == id);
            response = _mapper.Map<FinalCall, FinalCallResponse>(resultDb);
            return response;
        }

        /// <summary>
        /// Inserta un Llamado a Final
        /// </summary>
        /// <param name="finalCall"></param>  
        [HttpPost]
        public ActionResult Post([FromBody] FinalCall finalCall)
        {
            try
            {
                context.FinalCall.Add(finalCall);
                context.SaveChanges();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        /// <summary>
        /// Modifica un Llamado a Final
        /// </summary>
        /// <param name="id"></param>
        /// <param name="finalCall"></param>
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] FinalCall finalCall)
        {
            try
            {
                if (finalCall.IdFinalCall == id)
                {
                    context.Entry(finalCall).State = EntityState.Modified;
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
                var finalCall = context.FinalCall.FirstOrDefault(u => u.IdFinalCall == id);
                if (finalCall != null)
                {
                    context.FinalCall.Remove(finalCall);
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
