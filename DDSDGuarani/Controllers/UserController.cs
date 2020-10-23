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
    public class UserController : Controller
    {
        private readonly MyContext context;
        private readonly IMapper _mapper;

        public UserController(MyContext context, IMapper mapper)
        {
            this.context = context;
            this._mapper = mapper;
        }

        /// <summary>
        /// Trae Listado de Usuarios
        /// </summary>
        [HttpGet]
        public IEnumerable<UserResponse> Get()
        {
            IEnumerable<UserResponse> response = new List<UserResponse>();
            var resultDb = context.User.Include(x => x.Address).Include(x => x.InscriptionFinals).Include(x => x.EvaluationInstances).Include(x => x.Courses).ToList().OrderBy(x => x.Id);
            response = _mapper.Map<IEnumerable<User>, IEnumerable<UserResponse>>(resultDb);
            return response;
        }

        /// <summary>
        /// Trae Usuario por ID
        /// </summary>
        /// <param name="id"></param>  
        [HttpGet("{id}")]
        public UserResponse Get(int id)
        {
            UserResponse response = new UserResponse();
            var resultDb = context.User.Include(x => x.Address).Include(x => x.InscriptionFinals).Include(x => x.EvaluationInstances).Include(x => x.Courses).FirstOrDefault(u => u.Id == id);
            response = _mapper.Map<User, UserResponse>(resultDb);
            return response;
        }

        /// <summary>
        /// Trae un Usuario por DNI
        /// </summary>
        /// <param name="dni"></param>  
        [HttpGet]
        [Route("[action]/{dni}")]
        public UserResponse Dni(int dni)
        {
            UserResponse response = new UserResponse();
            var resultDb = context.User.FirstOrDefault(u => u.Dni == dni.ToString());
            response = _mapper.Map<User, UserResponse>(resultDb);
            return response;
        }

        /// <summary>
        /// Trae un Usuario por Email
        /// </summary>
        /// <param name="email"></param>  
        [HttpGet]
        [Route("[action]/{email}")]
        public UserResponse Dni(string email)
        {
            UserResponse response = new UserResponse();
            var resultDb = context.User.FirstOrDefault(u => u.Email == email);
            response = _mapper.Map<User, UserResponse>(resultDb);
            return response;
        }

        /// <summary>
        /// Inserta un Usuario
        /// </summary>
        /// <param name="user"></param>  
        [HttpPost]
        public ActionResult Post([FromBody] User user)
        {
            try
            {
                context.User.Add(user);
                context.SaveChanges();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        /// <summary>
        /// Modifica un Usuario
        /// </summary>
        /// <param name="id"></param>
        /// <param name="user"></param>
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] User user)
        {
            try
            {
                if (user.Id == id)
                {
                    context.Entry(user).State = EntityState.Modified;
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
        /// Elimina un Usuario
        /// </summary>
        /// <param name="id"></param>  
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                var user = context.User.FirstOrDefault(u => u.Id == id);
                if (user != null)
                {
                    context.User.Remove(user);
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
