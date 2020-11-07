import React, { useState, useEffect } from 'react';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { Box, Grid, Button, Typography } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';

const UploadImage = () => {
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
    <div display="flex">
      <Grid container direction="row" justify="flex-end">
        <Grid item justifyItems="center">
          <PersonOutlineIcon style={{ fontSize: 50, margin: 15 }} />
        </Grid>
      </Grid>
      <Box
        justifyContent="center"
        display="flex"
        alignItems="center"
        style={{
          height: '75vh'
        }}
      >
        <Button variant="outlined" onClick={showWidget} color="primary">
          <PublishIcon color="primary" />
          <Typography>Upload Image</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default UploadImage;
