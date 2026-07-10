import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

function Bakim({ checked, onChange }) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
        />
      }
      label="Bakım da istiyorum"
    />
  );
}

export default Bakim;
