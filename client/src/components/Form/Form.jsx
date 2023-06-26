import { Box, Button, Container, Input, TextField, Typography } from '@mui/material'
import React from 'react'

const Form = () => {
  return (
    <div sx={{
      display:"flex",
      flexDirection: "column",
      margin: "0",
      padding: "0"
    }}>
    <div style={{
      backgroundColor: "blue",
      width: "100%",
      height: "50px",
      display: "flex",
      alignItems: "center",
      JustifyContent: "center"
    }}>
      <Typography>Register Now!!</Typography>
      </div>
      <Box sx={{
      display:"flex",
      flexDirection: "column"
    }}>
        <TextField label="First Name" variant="outlined"/>
        <TextField label="First Name" variant="outlined"/>
        <TextField label="First Name" variant="outlined"/>
        <Button>Submit</Button>
      </Box>
    </div>
  )
}

export default Form
