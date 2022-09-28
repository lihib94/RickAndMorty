import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";
import classes from '../Style/Navbar.module.css'

/** Navbar.jsx is responsible for navbar UI ,links to navigate between pages**/
const navItems = ["Task 1", "Task 2" , "Home"];

const DrawerAppBar = () => {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  let task;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //Hamburger nav (when the screen shrinks)
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center"}}>
      <List>
        {navItems.map((item) => {
          switch(item) {
            case  "Task 1":
               task = "FirstTask"
               break;
            case "Task 2":
               task = "SecondTask"
               break;
            default:
              task = "Home"
          }
          return (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center"}}>
              <NavLink to={task} key={Math.random()} className={classes.hamburgerLinks}><ListItemText primary={item} /></NavLink>
            </ListItemButton>
          </ListItem>
          )
          })}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ backgroundColor: 'pink'}}>
        <Toolbar  sx={{ backgroundColor: 'pink', height: '15vh' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.navContainer}>
            <img className={classes.evilImage}  alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/640px-Rick_and_Morty.svg.png"/>
            <Box sx={{ display: { xs: "none", sm: "block" }}}>
              {navItems.map((item) => {
                switch(item) {
                  case "Task 1":
                    task = "FirstTask"
                    break;
                  case "Task 2":
                    task = "SecondTask"
                    break;
                  default:
                    task = "Home"
                }
                return (
                  <NavLink to={task} key={item} className={classes.links}>
                  {item}
                  </NavLink>
                )
              })}
            </Box>
          </div>
          
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{height:'100%'}}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 100,
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
export default DrawerAppBar