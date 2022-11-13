import { Stack, Text } from '@chakra-ui/react';
import Dnd from "./Components/Dnd"
import FormDetails from './Components/FormDetails';

function App() {
  return (
    <Stack alignItems={'center'} bg={'#c8e9f7'}>
      <Stack
        // bg={'#edf6fa'}
        w={['100%', '80%']}
        m={'auto'}
        color={'black'}
        // boxShadow={'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'}
        p={4}
        fontSize={['1.5rem','2rem']}
      >
        <Text fontWeight={'bolder'}>ANYIMAGE.IO</Text>
      </Stack>
      <Stack justifyContent={'center'} w={['100%', '80%']} alignItems={'center'}>
        <Text color={'#2a8cb5'} fontSize={['1rem','3rem']} textAlign={'center'}>Turn Your Images into Clickable Social Cards!</Text>
      </Stack>
      <Dnd/>
      <FormDetails/>
    </Stack>
  );
}

export default App;
