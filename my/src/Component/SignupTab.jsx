import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, useColorModeValue } from "@chakra-ui/react";
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';

const SignupTab = () => {
    const colorScheme = useColorModeValue("blue", "green");

  return (
    <><Box maxW="lg" m="auto" mt="20">
    <Tabs  isFitted variant="soft-rounded" colorScheme={colorScheme} >
      <TabList mb="2em"   m="auto" >
        <Tab> Login </Tab>
        <Tab > Signup </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Login/>
        </TabPanel>
        <TabPanel>
          <Signup />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>


    
    </>
  )
}

export default SignupTab