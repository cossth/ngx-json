export interface InputParams {
  label: string;
  name: string;
  value?: number | string | boolean | Blob;
  description?: string;
  readonly?: boolean;
  validators: {
    required?: boolean;
    regularExpression?: string;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
  };
}
