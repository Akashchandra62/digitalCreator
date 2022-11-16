import { Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Card from './Components/Card';
import Footer from './Components/Footer';
import FormDetails from './Components/FormDetails';

function App() {
  const [yourImage, setImage] = useState({});
  
  return (
    // <Card/>

    <Stack alignItems={'center'} bg={'#c8e9f7'}>
      <Stack
        w={['100%', '80%']}
        m={'auto'}
        color={'black'}
        py={4}
        fontSize={['1.5rem','2rem']}
      >
        <Text fontWeight={'bolder'}>DIGICARD.IO</Text>
      </Stack>
      <Stack justifyContent={'center'} w={['100%', '80%']} alignItems={'center'}>
        <Text color={'#2a8cb5'} fontSize={['1rem','3rem']} textAlign={'center'}>Turn Your Images into Clickable Social Cards!</Text>
      </Stack>
      
      <FormDetails yourImage={yourImage} setImage={setImage}/>
      <Footer/>
    </Stack>
  );
}

export default App;
