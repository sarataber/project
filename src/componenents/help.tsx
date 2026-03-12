import * as React from 'react';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SaveIcon from '@mui/icons-material/Delete';
import axios from 'axios';

export default function LoadingButtonsTransition() {
  const [loading, setLoading] = React.useState(false);
  async function handleClick() {
    setLoading(true)
    const data = await axios.get("vdsfgsfdg")
    // console.log(data.data);
    setTimeout(()=>{

      setLoading(false)
    },1000)

  }

  return (
    <div>
      <FormControlLabel
        sx={{ display: 'block' }}
        control={
          <Switch
            checked={loading}
            onChange={() => setLoading(!loading)}
            name="loading"
            color="primary"
          />
        }
        label="Loading 123"
      />

      <Button
        color="secondary"
        onClick={handleClick}
        loading={loading}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="contained"
      >
        שמור כמות
      </Button>
    </div>
  );
}
