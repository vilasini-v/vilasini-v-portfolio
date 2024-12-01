import React from "react";
import Navbar from "./navbar";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useState } from "react";
import Button from '@mui/material/Button';
import { ListItemText } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Home=()=>{
    const [visibleCount, setVisibleCount] = useState(1);
    const handleViewMore = () => {
        setVisibleCount((prevCount) => prevCount + 2);
      };
      const handleViewLess = () => {
        setVisibleCount((prevCount) => (prevCount - 2 > 0 ? prevCount - 2 : 2));
      };
    
    const eduList = [
        {
        name: 'Vellore Institute of Technology',
        year: '2022-2026',
        specs: 'Bachelors of Technology in Computer Science',
        grade: '9.15/10'
        },
        {
            name: 'BASE PU college',
            year: '2020-2022',
            specs: 'PCMC combination',
            grade: '89%'
        },
        {
            name: 'Silicon City Academy Of Secondary Education',
            year: '2010-2020',
            specs: 'CBSE',
            grade: '95.2%'
        }
    ];
    const langList = [
             'HTML',
             'CSS',       
             'JavaScript',        
             'Python',        
             'C/C++',
             'Java',  
             'SQL',
             'R'      
    ]
    const frameWorks=[
            'Flutter',
            'React JS',
            'Flutter',
            'TensorFlow',
            'pyTorch',
            'Langchain',
            'MongoDB',
            'Flask'
    ]
  
    return(
        <div className="home-container">
            <Navbar bg='#5C7457' color='#f8f8f8'/>
            <section className="intro-banner">
                <div className="left-intro">
                    <h2>Hello,<br></br>I'm Vilasini!</h2>
                    <p>Highly motivated and detail-oriented Computer Science student with a passion for coding and problem solving. Currently proficient and practicing in Front-end Web development and machine learning. Demonstrated ability to work collaboratively in team projects and a strong desire to learn and grow in the field of computer science.</p>
                    <button className="primary-button" style={{fontSize: '1rem'}}><SearchRoundedIcon style={{verticalAlign: 'middle'}}/><span><a href='https://www.linkedin.com/in/vilasini-vijay/'>linkedin.com/in/vilasini-vijay/</a></span></button>
                </div>
                <div className="right-intro">
                    <div className="right-intro-top">
                    <div class="square linkedin">
        <span></span>
        <span></span>
        <span></span>
        <div class="content">
        </div>
    </div>
                    </div>
                    <div className="right-intro-bottom">
                        <p>Contact me at:</p><br></br>
                        {/* <LocalPhoneRoundedIcon style={{verticalAlign: 'middle'}}/> : <span><a href='https://wa.me/918884734650'>+91 8884734650</a></span><br></br> */}
                        <EmailRoundedIcon style={{verticalAlign: 'middle'}}/> : <span><a href='mailto:vilasiniivj@gmail.com'>vilasiniivj@gmail.com</a></span><br></br>
                        <GitHubIcon style={{verticalAlign: 'middle'}}/> : <span><a href='https://github.com/vilasini-v'>github.com/vilasini-v</a></span><br></br>
                    </div>
                </div>
            </section>
            <section className="education">
                <p>Education</p>
                <div className="edu-group">
                <List>
                {eduList.slice(0, visibleCount).map((item) => (
                  <ListItem key={item.name} disablePadding>
                    <div className="edu-card">
                        <div className="line-1">
                      <ListItemText className="eduName" primary={<><b><h3>{item.name}</h3></b></>} />
                      <ListItemText className="eduYear" primary={item.year}/>
                      </div>
                        <ListItemText className="eduSpecs" primary={<><b>Course: </b> {item.specs}</> }/>
                      <ListItemText className="eduGrade" primary={<><b>Grade: </b> {item.grade}</> }/>
                      </div>
                  </ListItem>
                ))}
              </List>
              <div className="buttons">
        {visibleCount < eduList.length && (
          <Button onClick={handleViewMore}>
            View More
          </Button>
        )}
        {visibleCount > 2 && (
          <Button onClick={handleViewLess} >
            View Less
          </Button>
        )}
      </div>
                </div>
                <div className="skillCards">
            <div className="skillCard">
                <h2>Languages</h2>
            <List>
                {langList.map((item) => (
                  <ListItem key={item.name} disablePadding>
                        <ListItemText primary={<><ArrowForwardIcon style={{verticalAlign: 'middle'}}/>{item}</>}/>
                  </ListItem>
                ))}
              </List>
            </div>
            <div className="skillCard">
                <h2>Frameworks</h2>
            <List>
                {frameWorks.map((item) => (
                  <ListItem key={item.name} disablePadding>
                        <ListItemText primary={<><ArrowForwardIcon style={{verticalAlign: 'middle'}}/>{item}</>}/>
                  </ListItem>
                ))}
              </List>
            </div>
            </div>
            </section>
        </div>
    );
};

export default Home;