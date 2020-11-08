using AutoMapper;
using DDSDGuarani.DTOResponse;
using DDSDGuarani.EmailService;
using DDSDGuarani.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using DDSDGuarani.EmailService;
using Microsoft.Extensions.Configuration;
using ceTe.DynamicPDF;
using ceTe.DynamicPDF.PageElements;

namespace DDSDGuarani.Controllers
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
        public UserResponse Email(string email)
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

                if (user.Role.ToString() != "ADMIN") { 
                    var userEmailName = configuration.GetSection("EmailSenderData").GetValue<string>("EmailUserName");
                    var userEmailPassword = configuration.GetSection("EmailSenderData").GetValue<string>("EmailPassword");
                    var smtpClient = configuration.GetSection("EmailSenderData").GetValue<string>("SMTPClient");
                    var port = configuration.GetSection("EmailSenderData").GetValue<int>("Port");

                    //Code to implement PDF Attachment in Email
                    //Document document = new Document();
                    //document.PdfFormat = PdfFormat.Linearized;
                    //Page page = new Page(PageSize.Letter, PageOrientation.Portrait, 54.0f);
                    //document.Pages.Add(page);

                    //string labelText = "Hello World...\nFrom DynamicPDF Generator for .NET\nDynamicPDF.com HOLA!!!";
                    //Label label = new Label(labelText, 0, 0, 504, 100, Font.Helvetica, 18, TextAlign.Center);
                    //page.Elements.Add(label);
                    //document.Title = "TEST FILE";
                    //byte[] doc = document.Draw();

                    EmailSender.SendEmail(EmailTemplates.GetRegistrationEmailBody(user.Name,user.Surname, user.Email,user.Password),
                                          "Registración Exitosa", user.Email, smtpClient, userEmailName, userEmailPassword, port);

                }

                return Ok("Registración Exitosa");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        /// <summary>
        /// Modifica el campo Active del usuario
        /// </summary>
        /// <param name="id"></param>
        /// <param name="active"></param>
        [HttpPatch("{id}/[action]/{active}")]
        public ActionResult Active(int id, bool active)
        {
            try
            {
                User user = context.User.FirstOrDefault(user => user.Id == id);
                if (user != null)
                {
                    if (user.Active == active)
                        return Ok("No se hicieron cambios");

                    context.Entry(user).State = EntityState.Modified;
                    user.Active = active;
                    context.SaveChanges();
                    return Ok("Active de " + user.Name + " " + user.Surname + " cambiado a: " + active);
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

        /// <summary>
        /// Modifica el campo PasswordChange del usuario
        /// </summary>
        /// <param name="mail"></param>
        /// <param name="newPassword"></param>
        [HttpPatch("{id}/[action]/{active}")]
        public ActionResult PassChange(string mail,string newPassword)
        {
            try
            {
                User user = context.User.FirstOrDefault(user => user.Email == mail);
                if (user != null)
                {    
                    context.Entry(user).State = EntityState.Modified;
                    user.Password = newPassword;
                    user.PasswordChanged = true;
                    context.SaveChanges();
                    return Ok("Password de " + user.Name + " " + user.Surname + " cambiado a: " + newPassword);
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
