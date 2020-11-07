import React, { Component } from 'react';
import { Grid, Paper, Button, Box, Typography } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';

import EditIcon from '@material-ui/icons/Edit';
import ComplaintForm from './ComplaintForm';

const ComplaintReg = () => {
  return (
    <div>
      <Grid container xs={12}>
        <Grid item xs={7} style={{ margin: '2%' }}>
          <ComplaintForm />
        </Grid>
        <Grid
          item
          xs={4}
          style={{ margin: '2%' }}
          justifyContent="center"
          justify="flex-end"
          alignItems="center"
        >
          <Grid item align="center" style={{ margin: '2%' }}>
            <Box
              justifyContent="center"
              display="flex"
              alignItems="center"
              style={{ width: 200, background: 'yellow', height: 200 }}
            >
              <Button>
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
