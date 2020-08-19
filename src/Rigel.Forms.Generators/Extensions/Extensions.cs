using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using Rigel.Forms.Generators.Models;

namespace Rigel.Forms.Generators.Extensions
{
    public static class ReflectionExtensions
    {
        public static Dictionary<string, string> IdnMapping = new Dictionary<string, string>(){
            {"object","Object"},
            {"bool","boolean"},
            {"char","string"},
            {"string","string"},
            {"Guid","string"},
            {"sbyte","number"},
            {"byte","number"},
            {"short","number"},
            {"ushort","number"},
            {"int","number"},
            {"uint","number"},
            {"long","number"},
            {"ulong","number"},
            {"float","number"},
            {"double","number"},
            {"decimal","number"},
            {"DateTime","Date"},
            {"DateTimeOffset","Date"},
        };
        public static Dictionary<string, string> typesMapping = new Dictionary<string, string>(){
            {"bool","checkbox"},
            {"char","text"},
            {"string","text"},
            {"Guid","text"},
            {"sbyte","number"},
            {"byte","number"},
            {"short","number"},
            {"ushort","number"},
            {"int","number"},
            {"uint","number"},
            {"long","number"},
            {"ulong","number"},
            {"float","number"},
            {"double","number"},
            {"decimal","number"},
            {"DateTime","date"},
            {"DateTimeOffset","date"},
        };
        public static JsonProp ToTsProp(this PropertyInfo info)
        {
            return new JsonProp()
            {
                Name = info.Name.ToCamelCase(),
                Label = info.GetCustomAttributes<DisplayNameAttribute>().FirstOrDefault()?.DisplayName ?? info.Name,
                Value = info.GetCustomAttributes<DefaultValueAttribute>().FirstOrDefault()?.Value,
                Required = info.GetCustomAttributes<RequiredAttribute>().FirstOrDefault() != null,
                Description = info.GetCustomAttributes<DescriptionAttribute>().FirstOrDefault()?.Description,
                Type = getType(info),
            };
        }

        private static string getValue(string name)
        {
            if (IdnMapping.TryGetValue(name, out string type))
            {
                return type;
            }
            return null;
        }
        private static string getType(PropertyInfo info)
        {
            if(info.GetCustomAttributes<EmailAddressAttribute>().FirstOrDefault() != null){
                return "email";
            }
            return "text";
        }

        static string ToCamelCase(this string str)
        {
            // Regex pattern = new Regex(@"[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+");
            // var p =
            //   new CultureInfo("en-US", false)
            //     .TextInfo
            //     .ToTitleCase(
            //       string.Join(" ", pattern.Matches(str)).ToLower()
            //     )
            //     .Replace(@" ", "");
            var p = str;
            return char.ToLower(p[0]) + p.Substring(1, p.Length - 1);
        }
    }
}