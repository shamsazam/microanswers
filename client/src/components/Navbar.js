import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'

const Navbar = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" style={{ flexGrow: 1, justifyContent: 'flex-start'}}>Micro Answers</Typography>
        <IconButton color="inherit" aria-owns='menu-appbar'>
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
