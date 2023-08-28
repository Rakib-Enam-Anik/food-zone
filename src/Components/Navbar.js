/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/SendMeeting.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },


  ];

  const [ fix, setFix] = useState(false)

  function setFixed(){
    if (window.scrollY >= 400){
      setFix(true)
    }else {
      setFix(false)
    }
  }
  window.addEventListener("scroll", setFixed)
  
  return (
    <BrowserRouter>
    <nav className={fix ? 'navbar fixed' : 'navbar'}>
      <div className="start">
        <img src={Logo} alt="" />
        <p className="text" >SendMeeting</p>
      </div>
      <div className="end">
        <div className="navbar-links-container">
        <a href="">Home</a>
        <Link to='#About' smooth> About </Link>
        <Link to='#Testimonial' smooth> Testimonials </Link>
        <Link to='#Contact' smooth> Contact</Link>
         
          
        </div>
       
      </div>
     
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
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
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
    </BrowserRouter>
  );
};

export default Navbar;