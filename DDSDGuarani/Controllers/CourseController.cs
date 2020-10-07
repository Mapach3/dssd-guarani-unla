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
    public class CourseController : Controller
    {
        private readonly MyContext context;
        private readonly IMapper _mapper;

        public CourseController(MyContext context, IMapper mapper)
        {
            this.context = context;
            _mapper = mapper;
        }

        /// <summary>
        /// Trae Listado de Cursos por usuario
        /// </summary>
        [HttpGet]
        public IEnumerable<CourseResponse> Get()
        {
            IEnumerable<CourseResponse> response = new List<CourseResponse>();
            var resultDb = context.Course.ToList().OrderBy(x => x.IdUser);
            response = _mapper.Map<IEnumerable<Course>, IEnumerable<CourseResponse>>(resultDb);
            return response;
        }

        /// <summary>
        /// Trae Curso por ID de usuario
        /// </summary>
        /// <param name="id"></param>  
        [HttpGet("{id}")]
        public CourseResponse Get(int id)
        {
            CourseResponse response = new CourseResponse();
            var resultDb = context.Course.FirstOrDefault(u => u.IdUser == id);
            response = _mapper.Map<Course, CourseResponse>(resultDb);
            return response;
        }

        /// <summary>
        /// Inserta un Curso
        /// </summary>
        /// <param name="course"></param>  
        [HttpPost]
        public ActionResult Post([FromBody] Course course)
        {
            try
            {
                context.Course.Add(course);
                context.SaveChanges();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        /// <summary>
        /// Modifica un Curso por ID de usuario
        /// </summary>
        /// <param name="id"></param>
        /// <param name="course"></param>
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Course course)
        {
            try
            {
                if (course.IdUser == id)
                {
                    context.Entry(course).State = EntityState.Modified;
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
        /// Elimina un Curso por ID de usuario
        /// </summary>
        /// <param name="id"></param>  
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                var course = context.Course.FirstOrDefault(u => u.IdUser == id);
                if (course != null)
                {
                    context.Course.Remove(course);
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
