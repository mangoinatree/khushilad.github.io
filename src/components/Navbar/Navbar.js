import React from 'react'
import styles from "./navbar.module.css"
import { useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import PersonIcon from '@mui/icons-material/Person'
import ListIcon from '@mui/icons-material/List'
import BuildIcon from '@mui/icons-material/Build'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import FilePresentIcon from '@mui/icons-material/FilePresent'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'





const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    }

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
            <ListItem disablePadding>
                    <ListItemButton component="a" href='#about'>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary={"About"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href='#experience'>
                        <ListItemIcon>
                            <ListIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Experience"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href='#projects'>
                        <ListItemIcon>
                            <BuildIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Projects"} />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                <ListItemButton component="a" href='http://www.linkedin.com/in/khushilad' target="_blank" rel="noreferrer">
                    <ListItemIcon>
                        <LinkedInIcon />
                    </ListItemIcon>
                    <ListItemText primary="LinkedIn" />
                </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                <ListItemButton component="a" href='https://github.com/mangoinatree' target="_blank" rel="noreferrer">
                    <ListItemIcon>
                        <GitHubIcon />
                    </ListItemIcon>
                    <ListItemText primary="GitHub" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href='/assets/resume.pdf' target="_blank" rel="noreferrer">
                    <ListItemIcon>
                        <FilePresentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Resume" />
                </ListItemButton>
            </ListItem>
            </List>
        </Box>
    )

  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">MyPortfolio</a>
        <div className={styles.menu}>
        
        <MenuIcon
                onClick={
                    toggleDrawer("right", true)
                }
                className={styles.menuIcon}
            />
        <Drawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
            >
                {list("right")}
            </Drawer>
            
        </div>
    </nav>
  )
}

export default Navbar