import { FormControl, VStack, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleClick = () => setShow(!show);

  const postDetails = (pics) => {
    setLoading(true);

    if (pics === undefined) {
      toast({
        title: 'Please select an image.',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: "bottom"
      })
      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png" || pics.type === "image/jpg") {

      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "Chatonomyyy");
      data.append("cloud_name", "dqtib2zku");

      axios.post("/api/user/upload-to-cloudinary", {
        data
      }).then((res) => res.json())
        .then(data => {
          if (res.data.url) {            
            setPic(res.data.url.toString());
            console.log(res.data.url.toString());
            setLoading(false);
          }
          else {
            console.log("Unexpected response from cloudinary",data);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        })
    }
    else {
      toast({
        title: "please select an image(jpeg, jpg, png)",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom"
      })
      setLoading(false);
      return;
    }

  }
  const submitHandler = async (req, res) => {
    setLoading(true);
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Please fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom"
      })
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Password doesn't match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom"
      });
      return;
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        }
      }
      const { data } = await axios.post("/api/user", { name, email, password, pic }, config);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom"
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chats");
    } catch (error) {
      toast({
        title: "Error Occurred",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom"
      })
      setLoading(false);
    }
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
        isLoading={loading}
      >
        Signup
      </Button>

    </VStack>
  )
}
