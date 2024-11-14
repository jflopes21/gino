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
  TabIndicator
} from "@chakra-ui/react";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function CustomerDashboard(): JSX.Element {
  const [isCallAttendantButtonClicked, setIsCallAttendantButtonClicked] = useState<boolean>(false);
  const [isCloseAccountButtonClicked, setIsCloseAccountButtonClicked] = useState<boolean>(false);
  const [showTabMenu, setShowTabMenu] = useState(false);
  const router = useRouter();

  const menuCategories = [
    {
      id: 1,
      category: "Sushi",
      items: [
        {
          id: 1,
          categoryId: 1,
          title: "Temakinho",
          subtitle: "Temaki minúsculo",
          price: "R$ 200,00",
          imageSrc: "/sushi1.jpg"
        },
        {
          id: 2,
          categoryId: 1,
          title: "Camarones",
          subtitle: "Beach Camarao com pistache",
          price: "R$ 200,00",
          imageSrc: "/sushi2.jpg"
        }
      ]
    },
    {
      id: 2,
      category: "Hambúrgueres",
      items: [
        {
          id: 3,
          categoryId: 2,
          title: "Cheeseburger",
          subtitle: "Hambúrguer clássico com queijo",
          price: "R$ 150,00",
          imageSrc: "/burger.jpg"
        }
      ]
    },
    {
      id: 3,
      category: "Pizzas",
      items: [
        {
          id: 4,
          categoryId: 3,
          title: "Margherita",
          subtitle: "Molho de tomate, mussarela e manjericão",
          price: "R$ 180,00",
          imageSrc: "/pizza.jpg"
        }
      ]
    },
    {
      id: 4,
      category: "Carnes",
      items: [
        {
          id: 5,
          categoryId: 4,
          title: "Frango Assado",
          subtitle: "Frango temperado com ervas",
          price: "R$ 170,00",
          imageSrc: "/chicken.jpg"
        },
        {
          id: 6,
          categoryId: 4,
          title: "Bife Angus",
          subtitle: "Corte especial de carne angus",
          price: "R$ 220,00",
          imageSrc: "/beef.jpg"
        }
      ]
    },
    {
      id: 5,
      category: "Massas",
      items: [
        {
          id: 7,
          categoryId: 5,
          title: "Spaghetti à Carbonara",
          subtitle: "Espaguete com molho cremoso de bacon",
          price: "R$ 160,00",
          imageSrc: "/pizza.jpg"
        },
        {
          id: 8,
          categoryId: 5,
          title: "Lasanha à Bolonhesa",
          subtitle: "Lasanha recheada com carne moída e queijo",
          price: "R$ 190,00",
          imageSrc: "/chicken.jpg"
        }
      ]
    },
    {
      id: 6,
      category: "Saladas",
      items: [
        {
          id: 9,
          categoryId: 6,
          title: "Salada Caesar",
          subtitle: "Alface, croutons e molho Caesar",
          price: "R$ 90,00",
          imageSrc: "/sushi1.jpg"
        },
        {
          id: 10,
          categoryId: 6,
          title: "Salada de Frutas",
          subtitle: "Mix de frutas frescas da estação",
          price: "R$ 60,00",
          imageSrc: "/burger.jpg"
        }
      ]
    },
    {
      id: 7,
      category: "Sobremesas",
      items: [
        {
          id: 11,
          categoryId: 7,
          title: "Torta de Limão",
          subtitle: "Torta azeda e doce de limão",
          price: "R$ 50,00",
          imageSrc: "/tacos.jpg"
        },
        {
          id: 12,
          categoryId: 7,
          title: "Brownie de Chocolate",
          subtitle: "Brownie úmido com pedaços de chocolate",
          price: "R$ 55,00",
          imageSrc: "/beef.jpg"
        }
      ]
    }
  ];

  const categoryRefs = useRef(menuCategories.map(() => React.createRef<HTMLDivElement>()));
  const handleTabChange = (index: number): void => {
    const selectedRef = categoryRefs.current[index];
    if (selectedRef?.current) {
      selectedRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const targetElement = cardRef.current;

    const observer = new IntersectionObserver(([entry]) => setShowTabMenu(!entry.isIntersecting), {
      threshold: 0.1
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

  const handleConsultOrder = (): void => {
    router.push("/clientes/pedido");
  };

  const handleSelectItem = (id: number): void => {
    router.push(`/clientes/produto/${id}`);
  };

  return (
    <Box w='full' h='full' pt={12}>
      {showTabMenu && (
        <Tabs position='fixed' top={0} w='full' bg='white' onChange={handleTabChange} pt={4}>
          <TabList
            w='full'
            overflowX='auto'
            whiteSpace='nowrap'
            overflowY='hidden'
            sx={{
              "&::-webkit-scrollbar": {
                display: "none"
              },
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}>
            {menuCategories.map((category) => (
              <Tab
                key={category.id}
                fontSize='14px'
                _selected={{
                  color: "primary.600"
                }}>
                {category.category}
              </Tab>
            ))}
          </TabList>
          <TabIndicator mt='-1.5px' height='2px' bg='primary.600' borderRadius='1px' />
        </Tabs>
      )}
      <VStack w='full' spacing={8} px={6}>
        <Card ref={cardRef} size='md' w='full' pt={4} position='relative'>
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
                João!
              </Text>{" "}
            </Heading>
            <Text>Como podemos te ajudar?</Text>
          </CardHeader>
          <CardBody>
            <VStack divider={<StackDivider />} w='full' spacing={4}>
              <Text>Mesa 14</Text>
              {isCallAttendantButtonClicked ? (
                <Button w='60%' variant='secondaryReverse' onClick={handleCallAttendantButton}>
                  Cancelar
                </Button>
              ) : (
                <Button w='60%' variant='secondary' onClick={handleCallAttendantButton}>
                  Chamar atendente
                </Button>
              )}
              <Button w='60%' variant='secondary' onClick={handleConsultOrder}>
                Consultar Pedido
              </Button>
              {isCloseAccountButtonClicked ? (
                <Button w='60%' variant='primaryReverse' onClick={handleCloseAccountButton}>
                  Cancelar fechamento
                </Button>
              ) : (
                <Button w='60%' variant='primary' onClick={handleCloseAccountButton}>
                  Fechar a conta
                </Button>
              )}
            </VStack>
          </CardBody>
        </Card>
        <VStack w='full' alignItems='flex-start' spacing={6}>
          <Text fontSize='20px' fontWeight='bold'>
            Cardápio
          </Text>
          {menuCategories.map((category, index) => (
            <VStack
              key={category.id}
              ref={categoryRefs.current[index]}
              w='full'
              alignItems='flex-start'
              spacing={4}
              divider={<StackDivider />}
              pt={6}
              mt={-6}>
              <Text fontSize='18px' fontWeight='semibold'>
                {category.category}
              </Text>
              <VStack divider={<StackDivider />} w='full' spacing={4}>
                {category.items.map((item, index) => (
                  <HStack
                    key={index}
                    w='full'
                    align='start'
                    h='120px'
                    spacing={4}
                    onClick={() => handleSelectItem(item.id)}
                    _hover={{
                      cursor: "pointer",
                      backgroundColor: "#e7e6e6"
                    }}
                    pl={2}>
                    <VStack alignItems='flex-start' w='full' maxWidth='calc(100% - 120px)'>
                      <Text maxWidth='100%' noOfLines={2}>
                        {item.title}
                      </Text>
                      <Text color='secondary.500' maxWidth='100%' noOfLines={2}>
                        {item.subtitle}
                      </Text>
                      <Text color='primary.600'>{item.price}</Text>
                    </VStack>
                    <Image
                      alt={`Imagem do ${item.title}`}
                      src={item.imageSrc}
                      objectFit='cover'
                      boxSize='110px'
                      borderRadius='md'
                    />
                  </HStack>
                ))}
              </VStack>
            </VStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
}
