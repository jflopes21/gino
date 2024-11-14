"use client";
import {
  Card,
  CardHeader,
  CardBody,
  VStack,
  StackDivider,
  Button,
  Image,
  Text,
  Box,
  Heading
} from "@chakra-ui/react";

export default function AdminDashboard(): JSX.Element {
  return (
    <Box w='full' h='100vh' px={8} display='flex' alignItems='center' pb={8}>
      <Card size='md' w='full' pt={4} position='relative' p={8}>
        <Image
          alt='logo'
          src='/logo.png'
          backgroundColor='white'
          border='2px solid'
          borderColor='gray.200'
          borderRadius='full'
          boxSize='70px'
          position='absolute'
          top='-35px'
          left='50%'
          transform='translateX(-50%)'
          zIndex={1}
        />
        <CardHeader>
          <Heading size='md'>
            Olá{" "}
            <Text as='span' color='primary.600' fontWeight='bold'>
              Administrador!
            </Text>{" "}
          </Heading>
          <Text>O que você deseja consultar?</Text>
        </CardHeader>
        <CardBody>
          <VStack divider={<StackDivider />} w='full' spacing={4}>
            <Button w='60%' variant='secondary'>
              Funcionários
            </Button>
            <Button w='60%' variant='secondary'>
              Mesas
            </Button>
            <Button w='60%' variant='secondary'>
              Cardápio
            </Button>
            <Button w='60%' variant='secondary'>
              Pedidos
            </Button>
            <Button w='60%' variant='primary'>
              Gerencial
            </Button>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
}
