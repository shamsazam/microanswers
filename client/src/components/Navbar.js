import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Hidden } from '@material-ui/core'
import { Menu, AccountCircle } from '@material-ui/icons'

const Navbar = () => {
  return (
    <div style={{ marginBottom: 64}}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Hidden smUp>
            <IconButton color="inherit"> <Menu /> </IconButton>
          </Hidden>
          <Typography variant="h6" color="inherit" style={{ flexGrow: 1, justifyContent: 'flex-start'}}>Micro Answers</Typography>
          <IconButton color="inherit" aria-owns='menu-appbar'>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>

  )
}

export default Navbar;
