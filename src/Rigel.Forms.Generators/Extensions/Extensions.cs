using System;
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
            {"boolean","checkbox"},
            {"char","text"},
            {"string","text"},
            {"guid","text"},
            {"sbyte","number"},
            {"byte","number"},
            {"short","number"},
            {"ushort","number"},
            {"int","number"},
            {"int32","number"},
            {"int64","number"},
            {"uint","number"},
            {"long","number"},
            {"ulong","number"},
            {"float","number"},
            {"double","number"},
            {"decimal","number"},
            {"datetime","date"},
            {"datetimeoffset","date"},
            {"uri","url"},
        };
        public static JsonProp ToTsProp(this PropertyInfo info)
        {
            JsonProp jsonProp = new JsonProp()
            {
                Name = info.Name.ToCamelCase(),
                Label = info.GetCustomAttributes<DisplayNameAttribute>().FirstOrDefault()?.DisplayName ?? info.Name,
                Value = info.GetCustomAttributes<DefaultValueAttribute>().FirstOrDefault()?.Value,
                Required = info.GetCustomAttributes<RequiredAttribute>().FirstOrDefault() != null,
                Description = info.GetCustomAttributes<DescriptionAttribute>().FirstOrDefault()?.Description,
                RegularExpression = getRegex(info),
                Type = getType(info),
                Readonly = info.GetCustomAttributes<ReadOnlyAttribute>().FirstOrDefault()?.IsReadOnly,
            };
            if (jsonProp.Type == "radio"|| jsonProp.Type == "select")
            {
                jsonProp.Options = info.PropertyType.GetEnumNames().Select(a => new Option() { Label = a, Value = a }).ToArray();
            }
            return jsonProp;
        }

        private static string getRegex(PropertyInfo info)
        {
            if(info.PropertyType.Name == nameof(Guid))
            return @"^[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$";
            return info.GetCustomAttributes<RegularExpressionAttribute>().FirstOrDefault()?.Pattern;
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
            if (info.PropertyType.IsEnum)
            {
                return "select";
            }

            if (info.GetCustomAttributes<EmailAddressAttribute>().FirstOrDefault() != null)
            {
                return "email";
            }
            if (info.GetCustomAttributes<UrlAttribute>().FirstOrDefault() != null)
            {
                return "url";
            }
            var att = info.GetCustomAttributes<DataTypeAttribute>().FirstOrDefault();
            if (att != null)
            {
                switch (att.DataType)
                {
                    case DataType.DateTime: return "datetime";
                    case DataType.Date: return "date";
                    case DataType.Time: return "time";
                    case DataType.PhoneNumber: return "tel";
                    case DataType.Currency: return "number";
                    case DataType.Text: return "text";
                    case DataType.Html: return "text";
                    case DataType.MultilineText: return "textarea";
                    case DataType.EmailAddress: return "email";
                    case DataType.Password: return "password";
                    case DataType.Url: return "url";
                    case DataType.ImageUrl: return "image";
                    case DataType.CreditCard: return "text";
                    case DataType.PostalCode: return "number";
                    case DataType.Upload: return "file";
                }
                if (!string.IsNullOrEmpty(att.CustomDataType))
                {
                    return att.CustomDataType;
                }
            }
            if (typesMapping.TryGetValue(info.PropertyType.Name.ToLower(), out string p))
            {
                return p;
            }
            Console.WriteLine(info.PropertyType.Name);
            return "text";
        }

        static string ToCamelCase(this string str)
        {
            var p = str;
            return char.ToLower(p[0]) + p.Substring(1, p.Length - 1);
        }
    }
}