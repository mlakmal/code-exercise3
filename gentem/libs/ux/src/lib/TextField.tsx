import { TextField, TextFieldProps } from '@mui/material';
import { useState } from 'react';

export type ValidateType = 'required' | 'pattern';

type ValidationError = {
  [key in ValidateType]?: boolean;
};

export interface IValidations {
  isValid: boolean;
}

export function useValidation() {
  //this is used to show validation errors
  const [showValidationErrors, setShowValidationErrors] = useState(false);

  const onValidation = (name: string, isValid: boolean) => {
    //TODO: set input name validation state
  };

  const validateForm = (): boolean => {
    const isValid = false;
    //TODO: validate all the input validation states and return if form is valid

    setShowValidationErrors(isValid);
    return isValid;
  };

  return [onValidation, validateForm, showValidationErrors] as [
    (name: string, isValid: boolean) => void,
    () => boolean,
    boolean
  ];
}

export interface IValidatorFn {
  (controlValue: unknown, confirmControlValue?: unknown):
    | ValidationError
    | undefined;
}

type ErrorDefinition = {
  [key in ValidateType]?: string;
};

export function CustomTextField(
  props: {
    onValidation?: (name: string, isValid: boolean) => void;
    showErrors?: boolean;
    errorDefinitions?: ErrorDefinition;
  } & TextFieldProps
) {
  const { onValidation, showErrors, required, errorDefinitions, ...rest } =
    props;

  return (
    <>
      <TextField {...rest} />
      {showErrors && <p>show validation error</p>}
    </>
  );
}
