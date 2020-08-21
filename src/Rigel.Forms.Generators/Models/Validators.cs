namespace Rigel.Forms.Generators.Models
{
    public class Validators
    {
        public bool? Required { get; set; }
        public string RegularExpression { get; set; }
        public object Min { get; set; }
        public object Max { get; set; }
        public int? MinLength { get; set; }
        public int? MaxLength { get; set; }
    }
}