import { Box, Button, HStack, Input, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { FaRegAddressCard } from 'react-icons/fa';
import Dnd from './Dnd';

const FormDetails = ({ yourImage, setImage }) => {
  const [created, setCreated] = useState(false);
  const [link, setLink] = useState(' Akash chandra');
  const [visible, setVisible] = useState(false);
  const [details, setDetails] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
  });

  const handleSubmit = async event => {
    event.preventDefault();
    let formData = new FormData();
    formData.append('images', yourImage);
    formData.append('name', details.name);
    formData.append('email', details.email);
    formData.append('mobile', details.mobile);
    formData.append('designation', details.designation);

    const createCard = await axios.post('/createcard', formData, {
      headers: {
        ContentType: 'multipart/form-data',
      },
    });
    const userId = createCard.data.user._id;
    setCreated(true);
    setVisible(true)
    setLink(``)
    console.log(userId);
  };

  const handleChange = e => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <Stack
      bg={'#e6f7f8'}
      w={'80%'}
      p={6}
      gap={5}
      my={4}
      border={'5px dashed white'}
      justifyContent={'center'}
    >
      <HStack justifyContent={'center'}>
          <Box>
            <Text>{link}</Text>
          </Box>
        </HStack>
      <form onSubmit={handleSubmit}>
        <Stack w={'100%'} justifyContent={'center'} alignItems={'center'}>
          <Dnd yourImage={yourImage} setImage={setImage} />
        </Stack>
        <Input
          focusBorderColor="none"
          my={1}
          p={5}
          py={7}
          fontSize={'1.2rem'}
          bg={'white'}
          type="text"
          name="name"
          value={details.name}
          onChange={handleChange}
          placeholder={'Name'}
          required
        />
        <Input
          focusBorderColor="none"
          my={1}
          p={5}
          py={7}
          fontSize={'1.2rem'}
          bg={'white'}
          type="email"
          name="email"
          value={details.email}
          onChange={handleChange}
          placeholder={'Email'}
          required
        />
        <Input
          focusBorderColor="none"
          my={1}
          p={5}
          py={7}
          fontSize={'1.2rem'}
          bg={'white'}
          type="number"
          name="mobile"
          value={details.mobile}
          onChange={handleChange}
          placeholder={'Mobile'}
          required
        />
        <Input
          focusBorderColor="none"
          my={1}
          p={5}
          py={7}
          fontSize={'1.2rem'}
          bg={'white'}
          type="text"
          name="designation"
          value={details.designation}
          onChange={handleChange}
          placeholder={'Designation'}
        />
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
