namespace Rigel.Forms.Generators.Models
{
    public partial class JsonProp
    {
        public string Label { get; set; }
        public dynamic Value { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
        public bool? Required { get; set; }
        public Option[] Options { get; set; }
        public bool? Multiselect { get; set; }
        public bool? Readonly { get; set; }
        public string RegularExpression { get; set; }
    }

    public partial class Option
    {
        public string Label { get; set; }
        public dynamic Value { get; set; }
    }
}