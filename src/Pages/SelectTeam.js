import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';
import classes from './selectTeam.module.css'


// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(2),
//     minWidth: 140,
//   },
// }));

export default function GroupedSelect() {
  function formControlHandler(props){
    console.log(props)
  } 

  return (
    <div className={classes.mainDropdown}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Select Category</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
          <optgroup label="Category 1">
            <option value={1}>Dev Team</option>
            <option value={2}>Backend Team</option>
          </optgroup>
          <optgroup label="Category 2">
            <option value={3}>Customer Support</option>
            <option value={4}>Human Resource</option>
          </optgroup>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Select Gender</InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value={1}>Male</MenuItem>
          <MenuItem value={4}>Female</MenuItem>
        </Select>
      </FormControl>
      <div>
        <Button variant="contained"  className={classes.buttonSubmit} onClick={formControlHandler}>Submit</Button>
        <Button variant="contained" color="secondary" className={classes.buttonCancel}>Cancel</Button>
      </div>
    </div>
  );
}