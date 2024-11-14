"use client";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  IconButton,
  Image,
  StackDivider,
  Text,
  VStack
} from "@chakra-ui/react";
import { ArrowLeft, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Cart(): JSX.Element {
  const router = useRouter();

  const handleToGoBack = (): void => {
    router.push("/clientes/dashboard");
  };

  return (
    <Box w='full' p={8} display='flex' flexDirection='column' gap={4}>
      <Button
        p={0}
        justifyContent='flex-start'
        leftIcon={<ArrowLeft color='#004aad' />}
        fontWeight='normal'
        onClick={handleToGoBack}
        variant='ghost'>
        Voltar
      </Button>
      <Heading w='full'>Carrinho</Heading>
      <VStack w='full' spacing={6}>
        <Card w='full'>
          <CardHeader
            w='full'
            h='full'
            p={0}
            display='flex'
            justifyContent='flex-end'
            py={2}
            px={2}>
            <IconButton
              variant='ghost'
              colorScheme='red'
              aria-label='deletar item'
              icon={<Trash2 />}
            />
          </CardHeader>
          <CardBody w='full' pt={0}>
            <VStack w='full' divider={<StackDivider />}>
              <HStack w='full' spacing={4} alignItems='flex-start'>
                <Image
                  alt='sushi'
                  src='/sushi1.jpg'
                  w='50%'
                  maxH='280px'
                  objectFit='cover'
                  rounded={4}
                />
                <VStack w='full' alignItems='flex-start'>
                  <Text fontWeight='medium'>Temakinho</Text>
                  <Text fontSize='14px'>R$ 9,00</Text>
                </VStack>
              </HStack>
              <VStack w='full' alignItems='flex-start'>
                <Text fontWeight='medium' color='secondary.500' fontSize='14px'>
                  Adicionais:
                </Text>
                <HStack w='full' justifyContent='space-between'>
                  <Text fontSize='14px' color='secondary.500'>
                    Coquinha
                  </Text>
                  <Text fontSize='14px' color='secondary.500'>
                    R$ 4,00
                  </Text>
                </HStack>
                <HStack w='full' justifyContent='space-between'>
                  <Text fontSize='14px' color='secondary.500'>
                    Bacon
                  </Text>
                  <Text fontSize='14px' color='secondary.500'>
                    R$ 10,00
                  </Text>
                </HStack>
                <HStack w='full' justifyContent='space-between'>
                  <Text fontSize='14px' color='secondary.500'>
                    Chocolate
                  </Text>
                  <Text fontSize='14px' color='secondary.500'>
                    R$ 6,00
                  </Text>
                </HStack>
              </VStack>
              <HStack w='full' justifyContent='space-between'>
                <Text>Total: </Text>
                <Text color='primary.600'>R$ 29,00</Text>
              </HStack>
            </VStack>
          </CardBody>
        </Card>
        <VStack w='full' alignItems='flex-end' spacing={4}>
          <HStack w='full' justifyContent='flex-end'>
            <Text fontSize='18px' fontWeight='medium'>
              Total:{" "}
            </Text>
            <Text fontSize='18px' fontWeight='medium'>
              R$29,00
            </Text>
          </HStack>
          <Button variant='primary'>Confirmar</Button>
        </VStack>
      </VStack>
    </Box>
  );
}
