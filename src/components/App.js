import React, { useState } from 'react';
import ComplaintReg from './ComplaintReg';
import ComplaintList from './ComplaintList';
import MatchedList from './MatchedList';
import Header from './Header';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UploadImage from './userSide/UploadImage';

const Home = () => {
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
};

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user" component={UploadImage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
