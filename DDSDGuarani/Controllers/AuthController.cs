using System;
using System.Linq;
using System.Security.Claims;
using System.Text;
using AutoMapper;
using DDSDGuarani.DTOResponse;
using DDSDGuarani.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

namespace DDSDGuarani.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly MyContext context;
        private readonly IMapper _mapper;
        private readonly IConfiguration _configuration;

        public AuthController(MyContext context, IMapper mapper, IConfiguration configuration)
        {
            this.context = context;
            _mapper = mapper;
            _configuration = configuration;
        }

        /// <summary>
        /// Recibe UserName y Contraseña de un User y realiza el Login devolviendo un Token
        /// </summary>
        /// <param name="user"/>
        [HttpPost]
        [Route("[action]")]
        public Response Login([FromBody] User user)
        {
            Response responseLogin = new Response();
           // user.Password = user.Password.Replace("\\\\", "\\");

            try
            {
                UserResponse userResp = new UserResponse();
                var resultDb = context.User.FirstOrDefault(u => u.UserName == user.UserName);
                userResp = _mapper.Map<User, UserResponse>(resultDb);

                if ( userResp != null && !userResp.Active)
                {
                    responseLogin.Cod = 401;
                    responseLogin.Data = null;
                    responseLogin.Mensaje = "Usuario Dado de Baja";
                    return responseLogin;
                }
                       
                if (userResp != null && userResp.Password.Equals(user.Password))
                {
                    // Leemos el secret_key desde nuestro appseting
                    var secretKey = _configuration.GetValue<string>("SecretKey");
                    var key = Encoding.ASCII.GetBytes(secretKey);

                    // Creamos los claims (pertenencias, características) del usuario
                    ClaimsIdentity claims = new ClaimsIdentity();
                    Claim datos = new Claim("UserData", JsonConvert.SerializeObject(userResp));

                    claims.AddClaim(datos);

                    var tokenDescriptor = new SecurityTokenDescriptor
                    {
                        Subject = claims,
                        // Nuestro token va a durar un día
                        Expires = DateTime.UtcNow.AddDays(1),
                        // Credenciales para generar el token usando nuestro secretykey y el algoritmo hash 256
                        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                    };

                    var tokenHandler = new System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler();
                    var createdToken = tokenHandler.CreateToken(tokenDescriptor);
                    
                    responseLogin.Cod = 200;
                    responseLogin.Data = tokenHandler.WriteToken(createdToken);
                    responseLogin.Mensaje = "OK";
                    responseLogin.Rol = userResp.Role.ToString();
                    responseLogin.ImageUser = userResp.ImgBase64;
                    responseLogin.NameUser = userResp.Name + " " + userResp.Surname;
                    responseLogin.PasswordChange = userResp.PasswordChanged;
                    responseLogin.MailUser = userResp.Email;
                    responseLogin.UserId = userResp.Id;
                    responseLogin.CareerId = userResp.CareerId;
                }
                else
                {
                    responseLogin.Cod = 401;
                    responseLogin.Data = null;
                    responseLogin.Mensaje = "Credenciales inválidas";
                }
            }
            catch (Exception e)
            {
                responseLogin.Cod = 502;
                responseLogin.Data = e.Message;
                responseLogin.Mensaje = "Error al intentar verificar el usuario";
            }

            return responseLogin;
        }
    }
}
