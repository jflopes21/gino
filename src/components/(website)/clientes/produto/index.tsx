"use client";

import {
  Box,
  Button,
  Checkbox,
  HStack,
  IconButton,
  Image,
  StackDivider,
  Text,
  Textarea,
  VStack
} from "@chakra-ui/react";
import { MessageSquareMore, Minus, Plus } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function SelectedProduct(): JSX.Element {
  const { id } = useParams();
  const product = {
    id: id,
    categoryId: 1,
    title: "Temakinho",
    subtitle: "Temaki minúsculo",
    price: 200,
    imageSrc: "/sushi1.jpg",
    additional: [
      {
        id: 1,
        productId: id,
        title: "Combo",
        description: "Combinho de batata",
        price: 8
      },
      {
        id: 2,
        productId: id,
        title: "Refrigerante",
        description: "Coca geladinhaaa",
        price: 12
      },
      {
        id: 3,
        productId: id,
        title: "Refrigerante",
        description: "Coca geladinhaaa",
        price: 12
      },
      {
        id: 4,
        productId: id,
        title: "Refrigerante",
        description: "Coca geladinhaaa",
        price: 12
      },
      {
        id: 5,
        productId: id,
        title: "Refrigerante",
        description: "Coca geladinhaaa",
        price: 12
      },
      {
        id: 6,
        productId: id,
        title: "Refrigerante",
        description: "Coca geladinhaaa",
        price: 12
      },
      {
        id: 7,
        productId: id,
        title: "Refrigerante",
        description: "Coca geladinhaaa",
        price: 12
      },
      {
        id: 8,
        productId: id,
        title: "Refrigerante",
        description: "Coca geladinhaaa",
        price: 12
      }
    ]
  };
  const [quantitySelected, setQuantitySelected] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(product.price);

  const updateTotalPrice = (quantity: number): void => {
    setTotalPrice(product.price * quantity);
  };

  const handlePlusButton = (): void => {
    setQuantitySelected((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      updateTotalPrice(newQuantity);
      return newQuantity;
    });
  };

  const handleMinusButton = (): void => {
    setQuantitySelected((prevQuantity) => {
      const newQuantity = Math.max(prevQuantity - 1, 1);
      updateTotalPrice(newQuantity);
      return newQuantity;
    });
  };

  const handleAdditionToggle = (price: number, isChecked: boolean): void => {
    if (isChecked) {
      setTotalPrice((prevTotal) => prevTotal + price * quantitySelected);
    } else {
      setTotalPrice((prevTotal) => prevTotal - price * quantitySelected);
    }
  };

  const formatPrice = (price: number): string => {
    return `R$ ${price.toFixed(2).replace(".", ",")}`;
  };

  return (
    <Box w='full' h='full' display='flex' flexDirection='column' gap={4}>
      <Image
        alt={`Foto do produto ${product.title}`}
        src={product.imageSrc}
        w='full'
        maxH='280px'
        objectFit='cover'
      />
      <VStack alignItems='flex-start' w='full' spacing={4}>
        <VStack w='full' alignItems='flex-start' spacing={1} px={4}>
          <Text fontSize='22px'>{product.title}</Text>
          <Text fontSize='16px' color='secondary.500'>
            {product.subtitle}
          </Text>
          <Text fontSize='14px' color='primary.600'>
            {product.price.toFixed(2).replace(".", ",")}
          </Text>
        </VStack>
        {product.additional.length > 0 && (
          <VStack w='full' alignItems='flex-start'>
            <Box w='full' p={4} backgroundColor='secondary.100'>
              <Text>Adicionais</Text>
              <Text fontSize='14px' color='secondary.500'>
                Escolha seus adicionais
              </Text>
            </Box>
            <VStack w='full' alignItems='flex-start' divider={<StackDivider />}>
              {product?.additional?.map((additional) => (
                <HStack key={additional.id} w='full' p={4}>
                  <VStack w='full' alignItems='flex-start' spacing={1}>
                    <Text maxWidth='100%' noOfLines={2}>
                      {additional.title}
                    </Text>
                    <Text fontSize='14px' color='secondary.500' maxWidth='100%' noOfLines={2}>
                      {additional.description}
                    </Text>
                    <Text fontSize='14px' color='primary.600'>
                      + {formatPrice(additional.price)}
                    </Text>
                  </VStack>
                  <Checkbox
                    size='lg'
                    colorScheme='blue'
                    borderRadius='50%'
                    sx={{
                      "input:checked + span": {
                        bg: "primary.600"
                      },
                      span: {
                        borderRadius: "50%"
                      }
                    }}
                    onChange={(e) =>
                      handleAdditionToggle(additional.price, e.target.checked)
                    }></Checkbox>
                </HStack>
              ))}
            </VStack>
          </VStack>
        )}
        <VStack w='full' p={4} alignItems='flex-start'>
          <HStack pl={2}>
            <MessageSquareMore color='#737373' width='20px' height='20px' />
            <Text color='gray.600'>Alguma observação?</Text>
          </HStack>
          <Textarea
            resize='none'
            minH='100px'
            borderColor='gray.300'
            placeholder='Ex: Sem cebola'
          />
        </VStack>
      </VStack>
      <Box w='full' p={4} backgroundColor='white'>
        <HStack w='full' justifyContent='space-between'>
          <HStack spacing={4}>
            <IconButton
              aria-label='minus'
              icon={<Minus />}
              variant='ghost'
              color='primary.600'
              onClick={handleMinusButton}
              isDisabled={quantitySelected <= 1}
            />
            <Text>{quantitySelected}</Text>
            <IconButton
              aria-label='plus'
              icon={<Plus />}
              variant='ghost'
              color='primary.600'
              onClick={handlePlusButton}
            />
          </HStack>
          <Button variant='primary'>Adicionar R$ {totalPrice.toFixed(2).replace(".", ",")}</Button>
        </HStack>
      </Box>
    </Box>
  );
}
