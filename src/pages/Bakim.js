
  import React, { useState } from 'react';
  import {

  FormControlLabel,Checkbox
} from '@mui/material';
  
  function Bakim() {
    const [bakimIstiyor, setBakimIstiyor] = useState(false);
    return (
  <FormControlLabel
            control={
              <Checkbox
                checked={bakimIstiyor}
                onChange={(e) => setBakimIstiyor(e.target.checked)}
              />
            }
            label="Bakım da istiyorum"
          />
          );
          }
          export default Bakim;
