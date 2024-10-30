"use client";
import { Box, Button, Input, InputGroup, Text, VStack, InputLeftElement } from "@chakra-ui/react";
import { Calendar, IdCard, Phone, UserRound } from "lucide-react";

export default function Register(): JSX.Element {
  return (
    <Box w="100vw" h="100vh" display="flex" alignItems="center" justifyContent="center">
      <VStack gap={8}>
        <VStack>
          <Text color="secondary.700" fontSize="26px" textAlign="center">
            Olá! Seja muito bem vindo ao <br />
            <Box as="span" fontSize="36px" fontWeight="bold" color="primary.600">
              Bar do Gino
            </Box>
          </Text>
        </VStack>
        <Box
          boxShadow="lg"
          p={6}
          rounded="lg"
          gap={4}
          display="flex"
          flexDirection="column"
          minW="400px"
          minH="250px"
          mb={40}>
          <VStack w="full" gap={4}>
            <VStack w="full">
              <InputGroup w="full">
                <InputLeftElement pointerEvents="none" h="full">
                  <IdCard color="#004aad" size={20} />
                </InputLeftElement>
                <Input placeholder="CPF" type="number" backgroundColor="white" w="full" />
              </InputGroup>
              <InputGroup w="full">
                <InputLeftElement pointerEvents="none" h="full">
                  <UserRound color="#004aad" size={20} />
                </InputLeftElement>
                <Input placeholder="Nome" backgroundColor="white" w="full" />
              </InputGroup>
              <InputGroup w="full">
                <InputLeftElement pointerEvents="none" h="full">
                  <Phone color="#004aad" size={20} />
                </InputLeftElement>
                <Input placeholder="Telefone" type="number" backgroundColor="#f6f4f4F" w="full" />
              </InputGroup>
              <InputGroup w="full">
                <InputLeftElement pointerEvents="none" h="full">
                  <Calendar color="#004aad" size={20} />
                </InputLeftElement>
                <Input
                  placeholder="Data de nascimento"
                  type="text"
                  backgroundColor="white"
                  w="full"
                />
              </InputGroup>
            </VStack>
            <Button w="full" variant="primary">
              Começar
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
