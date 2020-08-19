using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Example
{
    public enum CustomEnum
    {
        One,
        Two,
        Three
    }
    public class SampleForm
    {
        [EmailAddress]
        [Required]
        public string Email { get; set; }

        [Required]
        [DefaultValue("382c74c3-721d-4f34-80e5-57657b6cbc27")]
        public Guid Identity { get; set; }

        [Required]
        [Url]
        public Uri Profile { get; set; }

        [Required]
        [DataType(DataType.MultilineText)]
        public string Address { get; set; }

        [Required]
        [RegularExpression("^[a-zA-Z0-9]{2,5}")]
        [Description("This is your Username.")]
        public string Username { get; set; }

        public int Age { get; set; }
        public CustomEnum Enum { get; set; }

        [DataType(DataType.Password)]
        public string Password { get; set; }

        [DataType("time")]
        public int Time { get; set; }

        [DisplayName("Temperature in Celcius")]
        public long TemperatureC { get; set; }

        [ReadOnly(true)]
        [DefaultValue("Hello")]
        public string Summary { get; set; }

        [DisplayName("Agree to terms and conditions")]
        [Description("TOC")]
        [RegularExpression("([a-z])+")]
        [Required]
        public bool AgreeToC { get; set; }
    }
}
