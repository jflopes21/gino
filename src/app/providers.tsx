"use client";
import { theme } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }): JSX.Element {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
