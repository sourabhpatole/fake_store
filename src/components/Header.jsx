import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Header = ({ title }) => {
  return (
    <Box>
      <Heading mb={4} p={3} shadow="md" backgroundColor="teal" color="white">
        {title}
      </Heading>
    </Box>
  );
};

export default Header;
