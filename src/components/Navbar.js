import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Menu'
import React from 'react'


const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar >
                <IconButton color="inherit" >
                    <HomeIcon />
                </IconButton>
                <Typography variant="h6">LIVE SCORE</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;