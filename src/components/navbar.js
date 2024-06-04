import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css';
import resume from "../vilasini-resume.pdf";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Link } from "react-router-dom";
const Navbar = (props) => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
      {
        text: "About  Me",
        route: "/"
      },
      {
        text:"Work",
        route: "/work"
      },
      {
        text: "Get in touch",
        route: '/contact'
      },
    ];
    return (
        <nav style={{backgroundColor:props.bg, color: props.color}}>
        <div className="f1">
          <div className="nav-logo-container">
            <StarRoundedIcon style={{fontSize: '4rem'}}/>
            </div>
            <a className="name" style={{color: props.color}}>vilasini vijay</a>
            </div>
          <div className="navbar-links-container">
            <a href="/" style={{color: props.color}}>About Me</a>
            <a href={resume} style={{color: props.color}} download>Resume</a>
            <a href='/work' style={{color: props.color}}>Work</a>
            <button className="primary-button"><a href='/contact'>Get in Touch</a></button>
          </div>
          <div className="navbar-menu-container">
            <MenuIcon onClick={() => setOpenMenu(true)} />
          </div>
          <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={() => setOpenMenu(false)}
              onKeyDown={() => setOpenMenu(false)}
            >
              <List>
                {menuOptions.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton component={Link} to={item.route}>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
                 <ListItem disablePadding>
            <ListItemButton component="a" href={resume} download>
              <ListItemText primary="Resume" />
            </ListItemButton>
          </ListItem>
              </List>
              <Divider />
            </Box>
          </Drawer>
        </nav>
      );
    };
    export default Navbar;