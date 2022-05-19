import { Box, Flex, Heading, Spacer, Tag } from "@chakra-ui/react";
import React from "react";

export const StoreItem = ({ title, price }) => {
  return (
    <Box p={4} borderRadius="lg" borderWidth="2px">
      <Heading noOfLines={3} size="sm" fontWeight="500">
        {title}
      </Heading>
      <Spacer />
      <Tag mt="5px">₹.{price}</Tag>
    </Box>
  );
};
