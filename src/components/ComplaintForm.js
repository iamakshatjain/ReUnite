import React, { Component } from 'react';
import {
  Grid,
  Card,
  Select,
  MenuItem,
  Typography,
  InputLabel,
  TextField,
  FormControl
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '45%',
    margin: 10,
    [theme.breakpoints.down('xs')]: {
      width: '90%'
    }
  },

  lowerTextField: {
    minWidth: 200,
    width: '22%',
    margin: 10,
    [theme.breakpoints.down('xs')]: {
      width: '40%',
      minWidth: 140
    }
  }
}));

const ComplaintForm = () => {
  const classes = useStyles();

  const [gender, setGender] = React.useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <Card style={{ padding: 10, borderRadius: '5%' }}>
      <Typography align="center">Complaint Form</Typography>
      <Grid container style={{ marginTop: 20 }}>
        <Grid item display="flex" justifyContent="center">
          <TextField
            className={classes.textField}
            required
            id="outlined-required"
            label="Name"
            variant="outlined"
          />

          <TextField
            className={classes.textField}
            required
            id="outlined-required"
            label="Parent/Guardian Name"
            variant="outlined"
          />

          <TextField
            className={classes.textField}
            required
            id="outlined-required"
            label="Mobile No."
            variant="outlined"
          />

          <TextField
            className={classes.textField}
            required
            id="outlined-required"
            label="Last Seen"
            variant="outlined"
          />
        </Grid>

        <Grid container style={{ margin: 10 }}>
          <Grid item display="flex" justifyContent="center">
            <TextField
              id="datetime-local"
              label="Missing Time"
              type="datetime-local"
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
        </Grid>

        <Grid container display="flexbox">
          <Grid item justifyContent="center">
            <TextField
              className={classes.lowerTextField}
              required
              id="outlined-required"
              label="Age"
              variant="outlined"
            />
            <FormControl variant="outlined" className={classes.lowerTextField}>
              <InputLabel>Gender</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={gender}
                onChange={handleChange}
                label="Gender"
              >
                <MenuItem value={'Male'}>Male</MenuItem>
                <MenuItem value={'Female'}>Female</MenuItem>
                <MenuItem value={'Other'}>Other</MenuItem>
              </Select>
            </FormControl>
            <TextField
              className={classes.lowerTextField}
              required
              id="outlined-required"
              label="Skin"
              variant="outlined"
            />

            <TextField
              className={classes.lowerTextField}
              required
              id="outlined-required"
              label="Height"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ComplaintForm;
