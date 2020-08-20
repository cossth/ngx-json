import { InjectionToken } from '@angular/core';

export const defaultErrors = {
  required: (error) => `This field is required`,
  email: (error) => `Must be a valid email`,
  pattern: ({actualValue, requiredPattern}) => `The value must be of ${requiredPattern} format.`,
  minlength: ({ requiredLength, actualLength }) =>    `Expect minimum ${requiredLength} but got ${actualLength}`,
  maxlength: ({ requiredLength, actualLength }) =>    `Expect maximum ${requiredLength} but got ${actualLength}`,
    invalid : (e) => e
};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors,
});
