import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Desarrollado por Digital House
            </Typography>
            <Button color="inherit">Emilio Pino</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </footer>
  )
}

export default Footer