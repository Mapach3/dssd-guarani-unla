using AutoMapper;
using StudentModule.DTOResponse;
using StudentModule.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using Microsoft.Extensions.Configuration;
using StudentModule.Requests;

namespace StudentModule.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly MyContext context;
        private readonly IMapper _mapper;
        private readonly IConfiguration configuration;

        public UserController(MyContext context, IMapper mapper, IConfiguration iConfig)
        {
            this.context = context;
            this._mapper = mapper;
            this.configuration = iConfig;
        }

        /// <summary>
        /// Trae Listado de Usuarios
        /// </summary>
        [HttpGet]
        public IEnumerable<UserResponse> Get()
        {
            IEnumerable<UserResponse> response = new List<UserResponse>();
            var resultDb = context.User.Include(x => x.Address).Include(x => x.InscriptionFinals).Include(x => x.Courses).Include(x => x.Career).ToList().OrderBy(x => x.Id);
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
            var resultDb = context.User.Include(x => x.Address).Include(x => x.InscriptionFinals).Include(x => x.Courses).Include(x => x.Career).FirstOrDefault(u => u.Id == id);
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
            var resultDb = context.User.Include(x => x.Address).Include(x => x.InscriptionFinals).Include(x => x.Courses).Include(x => x.Career).FirstOrDefault(u => u.Dni == dni.ToString());
            response = _mapper.Map<User, UserResponse>(resultDb);
            return response;
        }

        /// <summary>
        /// Trae un Usuario por Email
        /// </summary>
        /// <param name="email"></param>  
        [HttpGet]
        [Route("[action]/{email}")]
        public UserResponse Email(string email)
        {
            UserResponse response = new UserResponse();
            var resultDb = context.User.Include(x => x.Address).Include(x => x.InscriptionFinals).Include(x => x.Courses).Include(x => x.Career).FirstOrDefault(u => u.Email == email);
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
        /// Modifica los datos de la cuenta del usuario.
        /// </summary>
        /// <param name="accountData"></param>
        [HttpPatch]
        public ActionResult ChangeAccountData([FromBody] AccountData accountData)
        {
            try
            {
                User user = context.User.FirstOrDefault(user => user.Id == accountData.Id);
                if (user != null)
                {    
                    context.Entry(user).State = EntityState.Modified;
                    user.Email = string.IsNullOrEmpty(accountData.Email) ? user.Email : accountData.Email;
                    user.Password = string.IsNullOrEmpty(accountData.Password) ? user.Password : accountData.Password;
                    user.ImgBase64 = string.IsNullOrEmpty(accountData.ImgBase64) ? user.ImgBase64 : accountData.ImgBase64;

                    context.SaveChanges();
                    return Ok("El usuario se modifico correctamente");
                }
                else
                {
                    return BadRequest("No existe el usuario.");
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
