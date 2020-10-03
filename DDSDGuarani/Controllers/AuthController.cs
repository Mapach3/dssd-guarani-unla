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
            this._mapper = mapper;
            this._configuration = configuration;
        }

        //[HttpPost]
        //[Route("[action]")]
        //public Response Login([FromBody]User usuario)

        //{
        //    Response responseLogin = new Response();
        //    try { 
        //        //UsuarioResponse user = new UsuarioResponse();
        //        //var resultDb = context.Usuario.FirstOrDefault(u => u.Mail == usuario.Mail);
        //        //user = _mapper.Map<Usuario, UsuarioResponse>(resultDb);

        //        if (user != null && user.Contraseña.Equals(usuario.Password))
        //        {
        //            // Leemos el secret_key desde nuestro appseting
        //            var secretKey = _configuration.GetValue<string>("SecretKey");
        //            var key = Encoding.ASCII.GetBytes(secretKey);

        //            // Creamos los claims (pertenencias, características) del usuario


        //            /* var claims = new[]
        //             {

        //             new System.Security.Claims.ClaimsIdentity("UserData", JsonConvert.SerializeObject(user))
        //              };*/
        //            ClaimsIdentity claims = new ClaimsIdentity();
        //            Claim datos =  new Claim("UserData", JsonConvert.SerializeObject(user));
                 
        //            claims.AddClaim(datos);

        //            var tokenDescriptor = new SecurityTokenDescriptor
        //            {
        //                Subject = claims,
        //                // Nuestro token va a durar un día
        //                Expires = DateTime.UtcNow.AddDays(1),
        //                // Credenciales para generar el token usando nuestro secretykey y el algoritmo hash 256
        //                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        //            };

        //            var tokenHandler = new System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler();
        //            var createdToken = tokenHandler.CreateToken(tokenDescriptor);
        //            responseLogin.Cod = 200;
        //            responseLogin.Data = tokenHandler.WriteToken(createdToken);
        //            responseLogin.Mensaje = "OK";
        //        }
        //        else
        //        {
        //            responseLogin.Cod = 401;
        //            responseLogin.Data = null;
        //            responseLogin.Mensaje = "Credenciales invalidas";
        //        }
        //    }catch(Exception)
        //    {
        //        responseLogin.Cod = 502;
        //        responseLogin.Data = null;
        //        responseLogin.Mensaje = "Error al intentar verificar el usuario";
        //    }
        //    return responseLogin;
        //}
    }
}
