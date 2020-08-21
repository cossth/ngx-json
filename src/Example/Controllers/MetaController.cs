using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using Microsoft.AspNetCore.Mvc;
using Rigel.Forms.Generators.Extensions;
using Rigel.Forms.Generators.Models;

namespace Example.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class MetaController : ControllerBase
    {

        [HttpGet]
        public ActionResult<JsonProp> Meta()
        {
            var data = typeof(SampleForm).GetProperties().Select(a => a.ToTsProp());
            return Ok(data);
        }
    }
}