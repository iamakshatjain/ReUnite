import React, {useState} from 'react';
import {Avatar, Accordion, AccordionSummary, AccordionDetails, Card, CardContent} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
// TODO : remove mocking
import {Matches} from '../mockdata';

const useStyles = makeStyles((theme) => ({
    medium: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        fontSize: '2rem',
        marginRight: '2rem'
      },
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12),
      fontSize: '2rem',
      marginRight: '2rem'
    },
  }));

const MatchingProfiles = ({profiles}) => {
    const classes = useStyles();
    const [selectedProfile, setProfile] = useState(0);
    return(
        <React.Fragment>
            <div style={{display:'flex', justifyContent : 'space-evenly'}}>
                {profiles.map(({imageUrl}, index) => 
                    <Avatar style={{cursor:'pointer', border:`${index === selectedProfile ? '0.5rem solid red' : ''}`}} className={classes.medium} src={imageUrl} onClick={() => setProfile(index)}/>
                )}
            </div>
            <ul style={{fontSize:'1.2rem'}}>
                <div>Accuracy : {profiles[selectedProfile]['accuracy']}</div>
                <div>Location : {profiles[selectedProfile]['location']}</div>
            </ul>
        </React.Fragment>
    )

}

const MatchCard = ({match}) => {
    const {name, age, gender, skin, imageUrl, guardian : {name : guardianName, contact : guardianContact}, missingTime, lastSeen, matchingProfiles} = match;
    const classes = useStyles();
    return(
        <Card style={{margin : '10px 0px'}}>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon style={{fontSize:'2rem'}}/>}>
                    <div style={{width:'100%', display:'flex', alignItems : 'center'}}>
                        <Avatar className={classes.large} src={imageUrl} alt={name}/>
                        <div>
                            <div style={{fontSize : '2rem'}}>{name}</div>
                            <div style={{fontSize : '0.8rem'}}>Missing Time : {missingTime}</div>
                            <div style={{fontSize : '0.8rem'}}>Last Seen : {lastSeen}</div>
                        </div>
                        <div style={{fontSize:'0.8rem', marginLeft:'2rem'}}>
                            <div>Guardian's Name : {guardianName}</div>
                            <div>Guardian's Contact : {guardianContact}</div>
                            <div>Age : {age}</div>
                            <div>Gender : {gender}</div>
                            <div>Skin : {skin}</div>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails style={{display:'flex', flexDirection : 'column'}}>
                    <MatchingProfiles profiles={matchingProfiles} /> 
                </AccordionDetails>
            </Accordion>
        </Card>
        
    )
}

const MatchedList = () => {
    return(
    <React.Fragment>
       {Matches.map((match, index) => <MatchCard key={index} match={match}/>)}
    </React.Fragment>
    );
}


export default MatchedList;