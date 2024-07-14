import * as React from 'react';
import Button from '@mui/material/Button';

export default function IconLabelButtons({ name, icon, onCall, color }) {
  return (
      <Button onClick={onCall} style={{backgroundColor: color}} variant="contained" endIcon={icon}>
        {name}
      </Button>
  );
}