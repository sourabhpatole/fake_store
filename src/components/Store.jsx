import { Box, GridItem, Input, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import { StoreItem } from "./StoreItem";
const Store = ({ items }) => {
  const [filterItems, setFilterItems] = useState(items);
  useEffect(() => {
    setFilterItems(items);
  }, [items]);

  return (
    <Box p={4}>
      <Header title="The Shopping Store" />
      <Box p={2}>
        <Input
          onChange={(e) => {
            let f = items.filter((item) =>
              item.title.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setFilterItems(f);
          }}
          placeholder="Search Item"
          mt={4}
        />
        <SimpleGrid columns={3} spacing={5} mt={2} p={6} backgroundColor="pink">
          {filterItems.map((item) => {
            return (
              <GridItem backgroundColor="white" borderRadius="lg">
                <StoreItem {...item} />
              </GridItem>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Store;
