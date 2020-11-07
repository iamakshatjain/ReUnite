import React, { Component } from "react";
import { Grid, Paper, Button, Box, Typography } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";

import EditIcon from "@material-ui/icons/Edit";
import ComplaintForm from "./ComplaintForm";
const ComplaintReg = () => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <ComplaintForm />
        </Grid>
        <Grid container>
          <Grid item>
            <Box
              justifyContent="center"
              display="flex"
              alignItems="center"
              style={{ width: 200, background: "yellow", height: 200 }}
            >
              <Button>
                <PublishIcon color="primary" />
                <Typography>Upload Image</Typography>
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Button>
              <Typography>Submit</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ComplaintReg;
