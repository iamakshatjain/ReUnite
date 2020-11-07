import React, { useState } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import GroupIcon from '@material-ui/icons/Group';

const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<HomeIcon />} label="HOME" />
        <Tab icon={<RecentActorsIcon />} label="COMPLAINTS" />
        <Tab icon={<GroupIcon />} label="MATCHES" />
      </Tabs>
    </Paper>
  );
};

export default Header;
