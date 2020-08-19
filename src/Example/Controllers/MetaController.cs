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
        public object Meta()
        {
            var t = typeof(WeatherForecastController)
            .GetMethods(BindingFlags.Instance | BindingFlags.DeclaredOnly | BindingFlags.Public).Where(a => a.IsPublic && !a.IsDefined(typeof(NonActionAttribute)))
            .Where(m => !m.GetCustomAttributes(typeof(System.Runtime.CompilerServices.CompilerGeneratedAttribute), true).Any())
            .Select(x => new ApiHelpEndpoint
            {
                Endpoint = x.DeclaringType.Name.Replace("Controller", String.Empty),
                Controller = x.DeclaringType.Name,
                Action = x.Name,
                DisplayableName = x.GetCustomAttributes<DisplayAttribute>().FirstOrDefault()?.Name ?? x.Name,
                Description = x.GetCustomAttributes<DescriptionAttribute>().FirstOrDefault()?.Description ?? String.Empty,
                Properties = x.ReturnType.GenericTypeArguments.FirstOrDefault()?.GetProperties().Select(a => a.ToTsProp()),
            });
            return Ok(t);
        }

        public class ApiHelpEndpoint
        {
            public string Endpoint { get; set; }
            public string Controller { get; set; }
            public string Action { get; set; }
            public string DisplayableName { get; set; }
            public string Description { get; set; }
            public string EndpointRoute => $"/api/{Endpoint}";
            public IEnumerable<JsonProp> Properties { get; set; }
        }
    }
}