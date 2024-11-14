"use client";
import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  Text,
  VStack,
  InputLeftElement
} from "@chakra-ui/react";
import { Lock, Mail } from "lucide-react";

export default function LoginPage(): JSX.Element {
  return (
    <Box w='100vw' h='100vh' display='flex' alignItems='center' justifyContent='center'>
      <VStack gap={8}>
        <Image alt='Logo Gino' src='/logo.png' boxSize='400px' h='100px' objectFit='cover' />
        <Box
          boxShadow='lg'
          p={6}
          rounded='lg'
          gap={4}
          display='flex'
          flexDirection='column'
          minW='400px'
          minH='250px'
          mb={40}>
          <Text fontSize='28px' fontWeight='bold' color='secondary.500'>
            Login
          </Text>
          <VStack w='full' gap={4}>
            <VStack w='full'>
              <InputGroup w='full'>
                <InputLeftElement pointerEvents='none' h='full'>
                  <Mail color='#004aad' size={20} />
                </InputLeftElement>
                <Input backgroundColor='white' placeholder='E-mail' w='full' />
              </InputGroup>
              <InputGroup w='full'>
                <InputLeftElement pointerEvents='none' h='full'>
                  <Lock color='#004aad' size={20} />
                </InputLeftElement>
                <Input type='password' backgroundColor='#f6f4f4F' placeholder='Senha' w='full' />
              </InputGroup>
            </VStack>
            <Button w='full' variant='primary'>
              Entrar
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
