
import './App.css';
import SignupTab from './Component/SignupTab';
import { Text } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
    
    <Text textAlign={"center"} color="red" fontSize={"1.5rem"} mt="30px"> Form Validations  </Text>

     <SignupTab/>
     
    </div>
  );
}

export default App;
