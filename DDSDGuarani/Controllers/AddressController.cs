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
    public class AddressController : Controller
    {
        private readonly MyContext context;
        private readonly IMapper _mapper;

        public AddressController(MyContext context, IMapper mapper)
        {
            this.context = context;
            _mapper = mapper;
        }

        /// <summary>
        /// Trae Listado de Direcciones
        /// </summary>
        [HttpGet]
        public IEnumerable<AddressResponse> Get()
        {
            IEnumerable<AddressResponse> response = new List<AddressResponse>();
            var resultDb = context.Address.ToList().OrderBy(x => x.Id);
            response = _mapper.Map<IEnumerable<Address>, IEnumerable<AddressResponse>>(resultDb);
            return response;
        }

        /// <summary>
        /// Trae Direccion por ID
        /// </summary>
        /// <param name="id"></param>  
        [HttpGet("{id}")]
        public AddressResponse Get(int id)
        {
            AddressResponse response = new AddressResponse();
            var resultDb = context.Address.FirstOrDefault(u => u.Id == id);
            response = _mapper.Map<Address, AddressResponse>(resultDb);
            return response;
        }

        /// <summary>
        /// Inserta una Direccion
        /// </summary>
        /// <param name="address"></param>  
        [HttpPost]
        public ActionResult Post([FromBody] Address address)
        {
            try
            {
                context.Address.Add(address);
                context.SaveChanges();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        /// <summary>
        /// Modifica una Direccion
        /// </summary>
        /// <param name="id"></param>
        /// <param name="address"></param>
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Address address)
        {
            try
            {
                if (address.Id == id)
                {
                    context.Entry(address).State = EntityState.Modified;
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
        /// Elimina una Direccion
        /// </summary>
        /// <param name="id"></param>  
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                var address = context.Address.FirstOrDefault(u => u.Id == id);
                if (address != null)
                {
                    context.Address.Remove(address);
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
