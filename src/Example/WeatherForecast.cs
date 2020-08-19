using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Example
{
    public class WeatherForecast
    {
        [Required]
        public DateTime Date { get; set; }
        [EmailAddress]
        public string Email { get; set; }

        [Description("This is some field for temperature.")]

        [DisplayName("Temperature in Celcius")]
        public int TemperatureC { get; set; }

        public int TemperatureFaren => 32 + (int)(TemperatureC / 0.5556);

        [DefaultValue("Hello")]
        public string Summary { get; set; }
    }
}
