import { Box, Center, Heading, Image, Spacer, Tag } from "@chakra-ui/react";
import React from "react";

export const StoreItem = ({ title, price, image }) => {
  return (
    <Box p={1} borderRadius="lg" mb={4}>
      <Center>
        <Image src={image} h="300px" w="240px" m={3} />
      </Center>
      <Heading noOfLines={3} size="sm" fontWeight="500">
        {title}
      </Heading>
      <Spacer />
      <Tag mt={5}>₹.{price}</Tag>
    </Box>
  );
};
