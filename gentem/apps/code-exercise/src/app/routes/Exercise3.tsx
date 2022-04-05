import { CustomTextField, useValidation } from '@gentem/ux';
import { Button } from '@mui/material';
import { useState } from 'react';

export function Exercise3() {
  const [ onValidation, validateForm, showValidationErrors ] = useValidation();
  const [textField1, setTextField1] = useState('');

  const onSubmit = () => {
    if (validateForm()) {
      alert('form is valid');
      return;
    }

    alert('form is invalid');
  };

  return (
    <>
      <p>Common form input validator</p>
      <CustomTextField
        id="textField1"
        name="textField1"
        value={textField1}
        onChange={(e) => {
          setTextField1(e.target.value);
        }}
        onValidation={onValidation}
        showErrors={showValidationErrors}
        required
        errorDefinitions={{required: 'This field is required'}}
      />

      <br />
      <Button onClick={onSubmit}>Submit</Button>
    </>
  );
}
