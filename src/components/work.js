import React from 'react'
import { useState } from 'react';
import Navbar from './navbar';
import { List } from '@mui/material';
import Button from '@mui/material/Button';
import { ListItemText } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import { Box } from '@mui/material';
const Work = () => {
    const internships=[
        {
        company:"Xencia Technologies",
        year:"June 2024",
        position:"Data Science Intern",
        desc:"Worked on projects with langchain, lang graph and open ai."
        },
        {
          company:"Reverse Innovations",
          year: "June 2024",
          position:"Software Research Intern",
          desc:"Worked with flutter to produce a CRM application on the frontend side."
        }
    ];
    const hackathons=[
      {
        name:"SIH Hackathon",
        year:"2024",
        desc:"Developed an app that bridges farmers and retailers, offering a platform for open market interactions aligning with SDG 8, 9 and 10. Secured rank 1 out of 300 applications nationwide for our problem statement. Selected for finals (Mid-Decemeber 2024).",
        techStacks:"Flutter, ML"
      },
        {
            name:"WebDex",
            year:"2024",
            desc:"Secured 1st place in the hackathon conducted by ACM student chapter and received prize money and internship opportunity by Reverse Innovations. Developed a platform that bridges the gap and creates an easy communication platform between volunteers and NGOs aligning with SDGs 4,8,9 and 17.",
            techStacks:"HTML5, CSS, JS"
        },
        {
            name:"Cook'Off Hackathon",
            year:"2024",
            desc:"A website that bridges the gap between nurseries and buyers, promoting sustainable practices in line with SDGs 15 (Life on Land) and 2 (Zero Hunger).",
            techStacks:"HTML5, CSS, JS, Node JS, Python"
        },
        {
            name:"UI/UX zero to hero",
            year:"2023",
            desc:"Created a FIGMA mockup for Music App and was ranked in top 3 out of 80 participants.",
            techStacks:"Figma"
        },
        {
            name:"IEEE Robotics Society Hackathon",
            year:"2023",
            desc:"Implemented a machine learning model to determine a patient’s condition with an accuracy of 0.76. Top 5 out of 60 teams.",
            techStacks:"Python"
        },
        {
            name:"SMART INDIA HACKATHON",
            year:"2023",
            desc:"Devised a web-app that helps students network with professors for research partnerships and mentorship programmes.",
            techStacks:"React JS, Django, Sci-kit learn"
        }
    ];
    const projects=[
      {
        name:"Online Job Portal",
        link:"Not deployed",
        year:'2024',
        desc:"Building a portal to connect job seekers and clients, using ML for tailored job recommendations to the job seekers",
        techStacks:"MongoDB, ReactJS, Flask, tailwind CSS"
      },
      {
        name:"Personalized Online Mentor",
        link:"Not deployed",
        year:'2024',
        desc:"Utilizing LLMs to generate comprehensive personalized reports of the tests taken, aiming for enhancing user learning outcomes, tracked through improved test completion rates.",
        techStacks:"Django, Amazon RDS, ReactJS, tailwind CSS"
      },
        {
        name:'Affirmations generator',
        link:'https://affirmations-iota.vercel.app/',
        year:'2023',
        desc:'A frontend project that generates affirmations with the option to share it to twitter/X.',
        techStacks:"HTML, CSS, JavaScript"
    },
    {
        name:'Arcade',
        link:'https://arcade-navy.vercel.app/',
        year:'2024',
        desc:'An arcade with mini games made with javascript such as rock-paper-scissors, coin-flip, and guess-the-number',
        techStacks:"Javascript, HTML, CSS, React JS"
    }
    ];
    const [visibleCountIn, setVisibleCountIn] = useState(1);
    const [visibleCountHack, setVisibleCountHack] = useState(2);
    const [visibleCountProj, setVisibleCountProj]=useState(2);
    const handleViewMoreIn = () => {
        setVisibleCountIn((prevCount) => prevCount + 2);
      };
      const handleViewLessIn = () => {
        setVisibleCountIn((prevCount) => (prevCount - 2 > 0 ? prevCount - 2 : 2));
      };
      const handleViewMoreHack = () => {
        setVisibleCountHack((prevCount) => prevCount + 2);
      };
      const handleViewLessHack = () => {
        setVisibleCountHack((prevCount) => (prevCount - 2 > 0 ? prevCount - 2 : 2));
      };
      const handleViewMoreProj = () => {
        setVisibleCountProj((prevCount) => prevCount + 2);
      };
      const handleViewLessProj = () => {
        setVisibleCountProj((prevCount) => (prevCount - 2 > 0 ? prevCount - 2 : 2));
      };



  return (
    <div className='work-container'>
        <Navbar bg='#F0F0C9' color='#5C7457'/>
        <section className='internship-section'>
        <p>Internships</p>
                <div className="edu-group">
                <List>
                {internships.slice(0, visibleCountIn).map((item) => (
                  <ListItem key={item.name} disablePadding>
                    <div className="edu-card">
                        <div className="line-1">
                      <ListItemText className="eduName" primary={<><b><h3>{item.company}</h3></b></>} />
                      <ListItemText className="eduYear" primary={item.year}/>
                      </div>
                        <ListItemText className="" primary={<> <b>Position: </b>{item.position}</> }/>
                      <ListItemText className="" primary={<>{item.desc}</> }/>
                      </div>
                  </ListItem>
                ))}
              </List>
              <div className="buttons">
        {visibleCountIn < internships.length && (
          <Button onClick={handleViewMoreIn} >
            View More
          </Button>
        )}
        {visibleCountIn > 1 && (
          <Button onClick={handleViewLessIn} >
            View Less
          </Button>
        )}
      </div>
        </div>
        </section>
        <section className='hackathon-section'>
        <p>Hackathons</p>
                <div className="edu-group">
                <List>
                {hackathons.slice(0, visibleCountHack).map((item) => (
                  <ListItem key={item.name} disablePadding>
                    <div className="edu-card">
                        <div className="line-1">
                      <ListItemText className="eduName" primary={<><b><h3>{item.name}</h3></b></>} />
                      <ListItemText className="eduYear" primary={item.year}/>
                      </div>
                        <ListItemText className="eduSpecs" primary={<> {item.desc}</> }/>
                      <ListItemText className="eduGrade" primary={<><b>Tech Stack: {item.techStacks}</b></> }/>
                      </div>
                  </ListItem>
                ))}
              </List>
              <div className="buttons">
              <Box display="flex" justifyContent="space-between">

        {visibleCountHack < hackathons.length && (
          <button className='b' style={{backgroundColor:'#5c7457', fontSize:'14px', border:'0px',color:'#f0f0c9', textDecoration:'underline'}} onClick={handleViewMoreHack}>
            VIEW MORE
          </button>
        )}
        <div  style={{height:'10px', width:'20px'}}></div>
        {visibleCountHack > 2 && (
          <button className='b' style={{backgroundColor:'#5c7457', fontSize:'14px', border:'0px',color:'#f0f0c9', textDecoration:'underline'}} onClick={handleViewLessHack} >
            VIEW LESS
          </button>
        )}
        </Box>
      </div>
        </div>
        </section>
        <section className='internship-section'>
        <p>Projects</p>
                <div className="edu-group">
                <List>
                {projects.slice(0, visibleCountProj).map((item) => (
                  <ListItem key={item.name} disablePadding>
                    <div className="edu-card">
                        <div className="line-1">
                      <ListItemText className="eduName" primary={<><b><h3>{item.name}</h3></b></>} />
                      <ListItemText className="eduYear" primary={item.year}/>
                      </div>
                        <ListItemText className="eduSpecs" primary={<> {item.desc}</> }/>
                      <ListItemText className="eduGrade" primary={<><b>{item.techStacks}</b></> }/>
                      </div>
                  </ListItem>
                ))}
              </List>
              <div className="buttons">
        {visibleCountProj < projects.length && (
          <Button onClick={handleViewMoreProj}>
            View More
          </Button>
        )}
        {visibleCountProj > 2 && (
          <Button onClick={handleViewLessProj} >
            View Less
          </Button>
        )}
      </div>
        </div>
        </section>

    </div>
  )
}

export default Work
