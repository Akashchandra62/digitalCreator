import { Button, HStack, Input, Select, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaRegAddressCard } from 'react-icons/fa';

const FormDetails = () => {
  const [details, setDetails] = useState({
    title: '',
    description: '',
    url: '',
    fileSize: 'large',
  });

  const handleSubmit = event => {
    event.preventDefault();
    console.log(details);
  };

  const handleChange = e => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <Stack bg={'#e6f7f8'} w={'80%'} p={6} gap={5} my={4} border={'5px dashed white'}>
      <form onSubmit={handleSubmit}>
        <Input
         focusBorderColor='none'
          my={1}
          p={5}
          py={7}
          fontSize={'1.2rem'}
          bg={'white'}
          type="text"
          name="title"
          value={details.title}
          onChange={handleChange}
          placeholder={'Title'}
        />
        <Input
        focusBorderColor='none'
          my={1}
          p={5}
          py={7}
          fontSize={'1.2rem'}
          bg={'white'}
          type="text"
          name="description"
          value={details.description}
          onChange={handleChange}
          placeholder={'Description'}
        />
        <Input
        focusBorderColor='none'
          my={1}
          mb={2}
          p={5}
          py={7}
          fontSize={'1.2rem'}
          bg={'white'}
          type="text"
          name="url"
          value={details.url}
          onChange={handleChange}
          placeholder={'Destination URL'}
        />
        <Select name="fileSize" bg={'white'} color={'red.500'} fontWeight={'bold'} onChange={handleChange}>
          <option value='large'   >Card Size - Large</option>
          <option value='small' >Card Size - Small</option>
        </Select>
        <HStack marginTop={7} justifyContent={'flex-end'}>
          <Button bg={'green.300'} type="submit" value="Submit" p={5} py={7}>
            <Text mr={2}>Generate Card </Text>
            <FaRegAddressCard />
          </Button>
        </HStack>
      </form>
    </Stack>
  );
};

export default FormDetails;
