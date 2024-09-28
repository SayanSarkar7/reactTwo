import {
    Avatar,
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} p={'16'} minH={'100vh'}>
      <VStack
        spacing={'8'}
        alignItems={'stretch'}
        width={['full','96']}
        m={'auto'}
        my={'16'}
      >
        <Heading alignSelf={'center'}>VIDEO HUB</Heading>
        <Avatar alignSelf={'center'} boxSize={'32'}/>
        <Input
          placeholder={'Name'}
          type={'text'}
          required
          focusBorderColor={'purple.500'}
        />
        <Input
          placeholder={'Email'}
          type={'email'}
          required
          focusBorderColor={'purple.500'}
        />
        <Input
          placeholder={'Password'}
          type={'password'}
          required
          focusBorderColor={'purple.500'}
        />
        
        <Button colorScheme={'purple'} type={'submit'}>
          Sign Up
        </Button>
        <Text textAlign={'right'}>
          Already ?{' '}
          <Button variant={'link'} colorScheme={'purple'}>
            <Link to={'/login'}>Log In</Link>
          </Button>
        </Text>
      </VStack>
    </Container>
  )
}

export default Signup;