import { Box, Button, Center, FormControl, FormErrorMessage, FormLabel, Heading, Input, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {DASHBOARD, REGISTER} from "../../lib/routes";
import { useLogin } from '../../hooks/auth';
import { useForm } from 'react-hook-form';
import { emailValidate, passwordValidate } from '../../utils/form-validate';
  
export default function Login() {

  const{login,isLoading} = useLogin();
  const {register, handleSubmit, reset, formState: {errors},}=useForm();

  async function handleLogin(data){
    const succeeded=await login({email: data.email, password: data.password, redirectTo: DASHBOARD});

    if (succeeded) reset();
  }

  return( 
  <Center w="100%" h="100vh">
    <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
      <Heading mb="4" size="lg" textAlign="center">Log In
      </Heading>

    <form onSubmit={handleSubmit(handleLogin)}>
      <FormControl isInvalid={errors.email} py="2">
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="user@email.com" {...register('email', emailValidate)} />
        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
      </FormControl>
      <FormControl  ontrol isInvalid={errors.password} py="2">
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Password123" {...register('password', passwordValidate)}  />
        <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
      </FormControl>
      <Button mt="4" type="submit" colorScheme="teal" size="md" w="full" 
      loadingText="Logging in...">Log In</Button>
    </form>

    {/* isLoading={true}  */}

    <Text fontSize="xlg" align="center" mt="6">
      Dont't have an account?{" "}
      <Link as={RouterLink} to={REGISTER} color="teal.800" fontWeight="medium" textDecor="underline" _hover={{background: "teal.100"}} >Register
      </Link>{" "}
      instead!
    </Text>
    </Box>
  </Center>
  );
}
