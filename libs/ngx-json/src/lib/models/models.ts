import { InputParams } from './input-params';

  export type Field =
    | TextInputParams
    | SelectInputParams
    | CheckboxInputParam
    | RadioInputParam;
  
  export type Fields = Field[];

export type CheckboxInputParam = InputParams & {
    type: 'checkbox';
    value?: boolean;
  };
  export type RadioInputParam = InputParams & {
    type: 'radio';
    options: { label: string; value: string | number }[];
  };
  
export type SelectInputParams = InputParams & {
    type: 'select' ;
    multiselect?: boolean;
    layout?: 'horizontal' | 'vertical',
    options: { label: string, value: string| number}[]
  }
  export type TextInputParams =
    | (InputParams & {
        type: 'password' | 'email' | 'text' | 'number' | 'url' | 'tel' | string;
        multiline?: boolean;
      })
    | (InputParams & { type: 'textarea'; lines: number });
  