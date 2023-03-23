import React from 'react'
import { Typography, useTheme, useMediaQuery, Box } from '@mui/material'
import Form from './Form';

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  return (
   <>
     <Box width={isNonMobileScreens ? "50%" : "93%"}
          backgroundColor={theme.palette.background.alt} 
                          textAlign="center" 
                          margin="5% auto" 
                          p="1rem 6%"
                          >
      <Typography fontWeight="bold" fontSize="32px" color="primary">
        WeHelp
      </Typography>
      <Box
        
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to your Social Community , connecting with your neighborhood!
        </Typography>
        <Form />
      </Box>
      </Box>
   </>
  )
  
};

export default LoginPage