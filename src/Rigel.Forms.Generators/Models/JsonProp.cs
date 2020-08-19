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
    }

    public partial class Option
    {
        public string Label { get; set; }
        public long Value { get; set; }
    }

    // public partial struct Value
    // {
    //     public bool? Bool;
    //     public long? Integer;
    //     public string String;

    //     public static implicit operator Value(bool Bool) => new Value { Bool = Bool };
    //     public static implicit operator Value(long Integer) => new Value { Integer = Integer };
    //     public static implicit operator Value(string String) => new Value { String = String };
    // }
}