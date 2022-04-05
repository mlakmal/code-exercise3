import { CustomTextField, Tab, Tabs, useValidation } from '@gentem/ux';
import { Button } from '@mui/material';
import { useState } from 'react';

export function Exercise4() {

  return (
    <>
      <p>Custom TabPanel</p>
      
      <Tabs>
          <Tab title="tab1">tab1</Tab>
          <Tab title="tab2">tab2</Tab>
      </Tabs>
    </>
  );
}
