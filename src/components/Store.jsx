import {
  Box,
  Button,
  Heading,
  Input,
  SimpleGrid,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import Header from "./Header";
import { StoreItem } from "./StoreItem";
const Store = ({ items, onItemAdd }) => {
  const itemNameRef = useRef();
  const itemPriceRef = useRef();
  return (
    <Box p={5}>
      <Header title="The Shopping Store" />
      <SimpleGrid columns={4} spacing={5}>
        {items.map((item) => {
          return <StoreItem title={item.title} price={item.price} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Store;
