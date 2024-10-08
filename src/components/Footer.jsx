import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'white'} p={'16'} minH={'40'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder={'Enter Email Here...'}
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'none'}
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
            <Heading textTransform={'uppercase'} textAlign={'center'}>Video Hub</Heading>
            <Text>All rights reserved</Text>
        </VStack>
        <VStack w={'full'}>
            <Heading textTransform={'uppercase'} size={'md'}>
                Social Media
            </Heading>
            <Button colorScheme={'white'} variant={'link'} >
                <a target={'blank'} href={'https://www.youtube.com/'}>YouTube</a>
            </Button>
            <Button colorScheme={'white'} variant={'link'} >
                <a target={'blank'} href={'https://www.Instagram.com/'}>Instagram</a>
            </Button>
            <Button colorScheme={'white'} variant={'link'} >
                <a target={'blank'} href={'https://www.facebook.com/'}>FaceBook</a>
            </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
