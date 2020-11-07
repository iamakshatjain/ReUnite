import React, { Component } from "react";
import { Grid, Paper, Typography, TextField } from "@material-ui/core";
const ComplaintForm = () => {
  return (
    <Paper style={{}}>
      <Typography align="center">Complaint Form</Typography>
      <Grid container style={{ padding: 10, justifyContent: "center" }}>
        <Grid
          item
          style={{ margin: 10 }}
          display="flex"
          justifyContent="center"
        >
          <TextField
            style={{ width: "45%", margin: 10 }}
            required
            id="outlined-required"
            label="Name"
            variant="outlined"
          />

          <TextField
            style={{ width: "45%", margin: 10 }}
            required
            id="outlined-required"
            label="Parent/Guardian Name"
            variant="outlined"
          />

          <TextField
            style={{ width: "45%", margin: 10 }}
            required
            id="outlined-required"
            label="Mobile No."
            variant="outlined"
          />

          <TextField
            style={{ width: "45%", margin: 10 }}
            required
            id="outlined-required"
            label="Last Seen"
            variant="outlined"
          />
        </Grid>

        <Grid container style={{ padding: 10, justifyContent: "center" }}>
          <Grid
            item
            style={{ margin: 10 }}
            display="flex"
            justifyContent="center"
          >
            <TextField
              id="datetime-local"
              label="Missing Time"
              type="datetime-local"
              // defaultValue="2017-05-24T10:30"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ComplaintForm;
