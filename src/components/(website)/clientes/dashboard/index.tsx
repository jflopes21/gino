"use client";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  StackDivider,
  Text,
  VStack,
  Image,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export default function CustomerDashboard(): JSX.Element {
  const [isCallAttendantButtonClicked, setIsCallAttendantButtonClicked] = useState<boolean>(false);
  const [isCloseAccountButtonClicked, setIsCloseAccountButtonClicked] = useState<boolean>(false);
  const [showTabMenu, setShowTabMenu] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targetElement = cardRef.current;

    const observer = new IntersectionObserver(([entry]) => setShowTabMenu(!entry.isIntersecting), {
      threshold: 0.1,
    });

    if (targetElement) observer.observe(targetElement);

    return (): void => {
      if (targetElement) observer.unobserve(targetElement);
    };
  }, []);

  const handleCallAttendantButton = (): void => {
    if (!isCallAttendantButtonClicked) {
      setIsCallAttendantButtonClicked(true);
    }
    if (isCallAttendantButtonClicked) {
      setIsCallAttendantButtonClicked(false);
    }
  };

  const handleCloseAccountButton = (): void => {
    if (!isCloseAccountButtonClicked) {
      setIsCloseAccountButtonClicked(true);
    }
    if (isCloseAccountButtonClicked) {
      setIsCloseAccountButtonClicked(false);
    }
  };

  return (
    <Box w="full" h="full" pt={12}>
      {showTabMenu && (
        <Tabs position="fixed" top={0} w="full" bg="white">
          <TabList justifyContent="center" w="full">
            <Tab>Filtrar 1</Tab>
            <Tab>Filtrar 2</Tab>
            <Tab>Filtrar 3</Tab>
          </TabList>
        </Tabs>
      )}
      <VStack w="full" spacing={8} px={6}>
        <Card ref={cardRef} size="md" w="full" pt={4} position="relative">
          <Image
            alt="logo"
            src="/logo.png"
            backgroundColor="white"
            border="2px solid"
            borderColor="gray.200"
            borderRadius="full"
            boxSize="70px"
            position="absolute"
            top="-35px"
            left="50%"
            transform="translateX(-50%)"
            zIndex={1}
          />
          <CardHeader>
            <Heading size="md">
              Olá{" "}
              <Text as="span" color="primary.600" fontWeight="bold">
                João!
              </Text>{" "}
            </Heading>
            <Text>Como podemos te ajudar?</Text>
          </CardHeader>
          <CardBody>
            <VStack divider={<StackDivider />} w="full" spacing={4}>
              <Text>Mesa 14</Text>
              {isCallAttendantButtonClicked ? (
                <Button w="60%" variant="secondaryReverse" onClick={handleCallAttendantButton}>
                  Cancelar
                </Button>
              ) : (
                <Button w="60%" variant="secondary" onClick={handleCallAttendantButton}>
                  Chamar atendente
                </Button>
              )}
              {isCloseAccountButtonClicked ? (
                <Button w="60%" variant="primaryReverse" onClick={handleCloseAccountButton}>
                  Cancelar fechamento
                </Button>
              ) : (
                <Button w="60%" variant="primary" onClick={handleCloseAccountButton}>
                  Fechar a conta
                </Button>
              )}
            </VStack>
          </CardBody>
        </Card>
        <VStack w="full" alignItems="flex-start" spacing={6}>
          <Text fontSize="20px" fontWeight="medium">
            Cardápio
          </Text>
          <VStack divider={<StackDivider />} w="full" spacing={4}>
            <HStack w="full" align="start" h="130px" spacing={4}>
              <VStack alignItems="flex-start" w="full" maxWidth="calc(100% - 120px)">
                <Text maxWidth="100%" noOfLines={2}>
                  Título do item
                </Text>
                <Text color="secondary.400" maxWidth="100%" noOfLines={2}>
                  Subtítulo do itemda dsasd dsadas dasdsadasdas dsadas dasd asas sdasdas
                </Text>
                <Text color="primary.600">R$ 200,00</Text>
              </VStack>
              <Image
                alt="Imagem do item"
                src="/burger.jpg"
                objectFit="cover"
                boxSize="110px"
                borderRadius="md"
              />
            </HStack>
            <HStack w="full" align="start" h="130px" spacing={4}>
              <VStack alignItems="flex-start" w="full" maxWidth="calc(100% - 120px)">
                <Text maxWidth="100%" noOfLines={2}>
                  Título do item
                </Text>
                <Text color="secondary.400" maxWidth="100%" noOfLines={2}>
                  Subtítulo do itemda dsasd dsadas dasdsadasdas dsadas dasd asas sdasdas
                </Text>
                <Text color="primary.600">R$ 200,00</Text>
              </VStack>
              <Image
                alt="Imagem do item"
                src="/chicken.jpg"
                objectFit="cover"
                boxSize="110px"
                borderRadius="md"
              />
            </HStack>
            <HStack w="full" align="start" h="130px" spacing={4}>
              <VStack alignItems="flex-start" w="full" maxWidth="calc(100% - 120px)">
                <Text maxWidth="100%" noOfLines={2}>
                  Título do item
                </Text>
                <Text color="secondary.400" maxWidth="100%" noOfLines={2}>
                  Subtítulo do itemda dsasd dsadas dasdsadasdas dsadas dasd asas sdasdas
                </Text>
                <Text color="primary.600">R$ 200,00</Text>
              </VStack>
              <Image
                alt="Imagem do item"
                src="/tacos.jpg"
                objectFit="cover"
                boxSize="110px"
                borderRadius="md"
              />
            </HStack>
            <HStack w="full" align="start" h="130px" spacing={4}>
              <VStack alignItems="flex-start" w="full" maxWidth="calc(100% - 120px)">
                <Text maxWidth="100%" noOfLines={2}>
                  Título do item
                </Text>
                <Text color="secondary.400" maxWidth="100%" noOfLines={2}>
                  Subtítulo do item
                </Text>
                <Text color="primary.600">R$ 200,00</Text>
              </VStack>
              <Image
                alt="Imagem do item"
                src="/pizza.jpg"
                objectFit="cover"
                boxSize="110px"
                borderRadius="md"
              />
            </HStack>
            <HStack w="full" align="start" h="130px" spacing={4}>
              <VStack alignItems="flex-start" w="full" maxWidth="calc(100% - 120px)">
                <Text maxWidth="100%" noOfLines={2}>
                  Título do item
                </Text>
                <Text color="secondary.400" maxWidth="100%" noOfLines={2}>
                  Subtítulo do item
                </Text>
                <Text color="primary.600">R$ 200,00</Text>
              </VStack>
              <Image
                alt="Imagem do item"
                src="/beef.jpg"
                objectFit="cover"
                boxSize="110px"
                borderRadius="md"
              />
            </HStack>
            <HStack w="full" align="start" h="130px" spacing={4}>
              <VStack alignItems="flex-start" w="full" maxWidth="calc(100% - 120px)">
                <Text maxWidth="100%" noOfLines={2}>
                  Título do item sdasds sdasdas sdasdas sadasddsadas dasdas dsadsa
                </Text>
                <Text color="secondary.400" maxWidth="100%" noOfLines={2}>
                  Subtítulo do itemda dsasd dsadas dasdsadasdas dsadas dasd asas sdasdas
                </Text>
                <Text color="primary.600">R$ 200,00</Text>
              </VStack>
              <Image
                alt="Imagem do item"
                src="/sushi1.jpg"
                objectFit="cover"
                boxSize="110px"
                borderRadius="md"
              />
            </HStack>
            <HStack w="full" align="start" h="130px" spacing={4}>
              <VStack alignItems="flex-start" w="full" maxWidth="calc(100% - 120px)">
                <Text maxWidth="100%" noOfLines={2}>
                  Título do item
                </Text>
                <Text color="secondary.400" maxWidth="100%" noOfLines={2}>
                  Subtítulo do itemda dsasd dsadas dasdsadasdas dsadas dasd asas sdasdas
                </Text>
                <Text color="primary.600">R$ 200,00</Text>
              </VStack>
              <Image
                alt="Imagem do item"
                src="/sushi2.jpg"
                objectFit="cover"
                boxSize="110px"
                borderRadius="md"
              />
            </HStack>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
}
