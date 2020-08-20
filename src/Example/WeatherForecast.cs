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
        // [Required]
        [ReadOnly(true)]
        [DefaultValue("382c74c3-721d-4f34-80e5-57657b6cbc27")]
        public Guid Identity { get; set; }

        [EmailAddress]
        [Required]
        public string Email { get; set; }

        // [Required]
        [Url]
        public Uri Profile { get; set; }

        // [Required]
        [RegularExpression("^[a-zA-Z0-9]{2,5}")]
        [Description("This is your Username.")]
        public string Username { get; set; }

        [DisplayName("Age in years")]
        public int Age { get; set; }

        // [Required]
        [DataType(DataType.MultilineText)]
        public string Address { get; set; }
        [Description("Favourite Number")]
        [DisplayName("Favourite Number")]
        public CustomEnum FavouriteNumber { get; set; }

        [DataType(DataType.Password)]
        [DefaultValue("Password")]
        public string Password { get; set; }

        [DataType("time")]
        public DateTime Time { get; set; }

        [DisplayName("Agree to terms and conditions")]
        [Description("TOC")]
        [RegularExpression("([a-z])+")]
        // [Required]
        public bool AgreeToC { get; set; }
    }
}
