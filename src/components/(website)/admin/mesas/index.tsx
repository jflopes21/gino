"use client";
import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  Heading,
  Card,
  CardBody,
  IconButton
} from "@chakra-ui/react";
import { ArrowLeft, Plus, Search, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Tables(): JSX.Element {
  const router = useRouter();
  const handleToGoBack = (): void => {
    router.push("/admin/dashboard");
  };

  const tables = [
    { id: 1, name: "Mesa 01" },
    { id: 2, name: "Mesa 02" },
    { id: 3, name: "Mesa 03" },
    { id: 4, name: "Mesa 04" },
    { id: 5, name: "Mesa 05" },
    { id: 6, name: "Mesa 06" },
    { id: 7, name: "Mesa 07" },
    { id: 8, name: "Mesa 08" },
    { id: 9, name: "Mesa 09" },
    { id: 10, name: "Mesa 10" }
  ];

  return (
    <Box w='full'>
      <VStack w='full' p={6} alignItems='flex-start' spacing={8}>
        <Button
          p={0}
          justifyContent='flex-start'
          leftIcon={<ArrowLeft color='#004aad' />}
          fontWeight='normal'
          onClick={handleToGoBack}
          variant='ghost'>
          Voltar
        </Button>
        <VStack alignItems='flex-start' spacing={4} w='full'>
          <Heading fontSize='28px'>Mesas</Heading>
          <HStack w='full' spacing={4}>
            <InputGroup w='65%'>
              <InputLeftElement pointerEvents='none'>
                <Search color='#004aad' size={20} />
              </InputLeftElement>
              <Input placeholder='Digite a mesa cadastrada' pl={10} />
            </InputGroup>
            <Button w='35%' variant='primary' rightIcon={<Plus />} px={10}>
              Cadastrar
            </Button>
          </HStack>
        </VStack>
        <VStack w='full' spacing={4}>
          {tables?.map((table) => (
            <Card key={table.id} w='full'>
              <CardBody w='full'>
                <HStack w='full' justifyContent='space-between'>
                  <Text fontSize='20px' fontWeight='medium' maxWidth='100%' noOfLines={2}>
                    {table.name}
                  </Text>
                  <IconButton
                    variant='ghost'
                    colorScheme='red'
                    aria-label='deletar item'
                    icon={<Trash2 />}
                  />
                </HStack>
              </CardBody>
            </Card>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
}
