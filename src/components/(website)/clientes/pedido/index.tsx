"use client";

import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  IconButton,
  Progress,
  Text,
  VStack
} from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";
import { getProgressStatus, StatusKey, ProgressStatusKey } from "./types";
import { useRouter } from "next/navigation";

export default function Order(): JSX.Element {
  const router = useRouter();
  const order: {
    id: number;
    progressStatus: ProgressStatusKey;
    status: StatusKey;
    forecast: number;
    createdDate: string;
  } = {
    id: 1,
    progressStatus: 1,
    status: 1,
    forecast: 50,
    createdDate: "07/11/2024 21:00"
  };

  const formatTime = (date: Date): string => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const calculateForecastTime = (createdDate: string, forecast: number): Date => {
    const [day, month, yearAndTime] = createdDate.split("/");
    const [year, time] = yearAndTime.split(" ");
    const [hours, minutes] = time.split(":");

    const baseDate = new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
      Number(hours),
      Number(minutes)
    );

    baseDate.setMinutes(baseDate.getMinutes() + forecast);
    return baseDate;
  };

  const forecastStartTime = calculateForecastTime(order.createdDate, order.forecast);
  const forecastEndTime = new Date(forecastStartTime.getTime() + 10 * 60000);

  const handleToGoBack = (): void => {
    router.push("/clientes/dashboard");
  };

  return (
    <Box w='full' px={8} display='flex' h='100vh'>
      <VStack w='full' justifyContent='space-around' alignItems='flex-start' spacing={10}>
        <HStack w='full' justifyContent='flex-start'>
          <IconButton
            variant='ghost'
            color='primary.600'
            aria-label='Voltar'
            icon={<ArrowLeft />}
            onClick={handleToGoBack}
          />
          <Text>Voltar</Text>
        </HStack>
        <VStack w='full' spacing={4} pb={20}>
          <Heading w='full'>Pedido #{order.id}</Heading>
          <Card w='full'>
            <CardBody w='full'>
              <VStack w='full' alignItems='flex-start' spacing={4}>
                <Text fontWeight='medium' color='secondary.900'>
                  {getProgressStatus(order.progressStatus)}
                </Text>
                <Progress w='full' size='xs' isIndeterminate />
                <HStack>
                  <Text fontWeight='medium' fontSize='14px' color='secondary.500'>
                    Previsão:{" "}
                  </Text>
                  <Text fontWeight='medium' fontSize='14px' color='secondary.900'>
                    {formatTime(forecastStartTime)} - {formatTime(forecastEndTime)}
                  </Text>
                </HStack>
              </VStack>
            </CardBody>
          </Card>
        </VStack>
        <Flex w='full' justifyContent='center'>
          <Button variant='primary'>Chamar atendente</Button>
        </Flex>
      </VStack>
    </Box>
  );
}
