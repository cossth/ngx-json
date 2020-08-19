export interface InputParams {
    label: string;
    name: string;
    value?: number | string | boolean | Blob;
    required?: boolean;
    description?: string;
    regularExpression?: string;
    readonly?: boolean;
}
