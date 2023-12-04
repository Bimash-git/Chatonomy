import { FormControl, VStack, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();

  const handleClick = () => setShow(!show);

  const postDetails = (pics) => {

  }
  const submitHandler = () => {

  }

  return (
    <VStack spacing="5px" className='background-all'>

      <FormControl id='name' isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder='Enter your name' onChange={(e) => setName(e.target.value)}></Input>
      </FormControl>

      <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}></Input>
      </FormControl>

      <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input type={show ? "text" : 'password'} placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}></Input>
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id='password' isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input type={show ? "text" : 'password'} placeholder='confirm password' onChange={(e) => setConfirmPassword(e.target.value)}></Input>
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id='pic' isRequired>
        <FormLabel>Upload your Picture</FormLabel>
        <Input type='file' p={1.5} accept='image/*' onChange={(e) => postDetails(e.target.files[0])}></Input>
      </FormControl>

      <FormLabel>Already Signed up?Click to <Link to="/login">Login</Link> </FormLabel>

      <Button
        colorScheme='blue'
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Signup
      </Button>

    </VStack>
  )
}
