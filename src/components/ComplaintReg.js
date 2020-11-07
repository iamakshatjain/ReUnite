import React, { useState, useEffect } from 'react';
import { Grid, Button, Box, Typography } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';

import ComplaintForm from './ComplaintForm';

const ComplaintReg = () => {
  const [imageURL, setImageURL] = useState('');
  const [widget, setWidget] = useState(null);

  const showWidget = () => {
    widget.open();
  };

  const checkUploadResult = (resultEvent) => {
    if (resultEvent.event === 'success') {
      console.log(resultEvent.info);
      setImageURL(resultEvent.info.secure_url);
    }
  };

  useEffect(() => {
    setWidget(
      window.cloudinary.createUploadWidget(
        {
          cloudName: 'whiteknight',
          uploadPreset: 'b0z6jywd'
        },
        (err, result) => {
          checkUploadResult(result);
        }
      )
    );
  }, []);

  return (
    <div>
      <Grid container>
        <Grid item xs={7} style={{ marginTop: '2%', marginBottom: '2%' }}>
          <ComplaintForm />
        </Grid>
        <Grid item xs={4} style={{ margin: '2%' }}>
          <Grid item align="center" style={{ margin: '2%' }}>
            <Box
              justifyContent="center"
              display="flex"
              alignItems="center"
              style={{ width: 200, background: 'yellow', height: 200 }}
            >
              <Button onClick={showWidget}>
                <PublishIcon color="primary" />
                <Typography>Upload Image</Typography>
              </Button>
            </Box>
          </Grid>

          <Grid item align="center" style={{ margin: '2%' }}>
            <Button variant="outlined" color="primary">
              <Typography>Submit</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ComplaintReg;
