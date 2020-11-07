import React, { useState } from 'react';
import ComplaintReg from './ComplaintReg';
import ComplaintList from './ComplaintList';
import MatchedList from './MatchedList';
import Header from './Header';
import Container from '@material-ui/core/Container';

function App() {
  const [tab, setTab] = useState(0);

  const TabPanel = (props) => {
    const { children, index } = props;
    if (index === tab) return <React.Fragment>{children}</React.Fragment>;
    else return null;
  };

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  return (
    <div>
      <Header tab={tab} handleTabChange={handleTabChange} />
      <Container>
        <TabPanel index={0}>Home</TabPanel>
        <TabPanel index={1}>
          <ComplaintReg />
          <ComplaintList />
        </TabPanel>
        <TabPanel index={2}>
          <MatchedList />
        </TabPanel>
      </Container>
    </div>
  );
}

export default App;
