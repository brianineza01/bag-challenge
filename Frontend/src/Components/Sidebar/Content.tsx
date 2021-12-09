import { Box, Link as ChakraLink, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const SidebarContent = ({ handleClick }: { handleClick: Function }) => (
  <VStack p={5} px={0}>
    <Box h="70px" p={5} px={0}>
      <Logo />
    </Box>
    <Box>
      <ChakraLink as={Link} to="/">
        MY LIST
      </ChakraLink>
    </Box>
    <Box>
      <ChakraLink as={Link} to="/explore">
        EXPLORE
      </ChakraLink>
    </Box>
    <Box>
      <ChakraLink as={Link} to="/?status=visited">
        VISITED
      </ChakraLink>
    </Box>
    <Box>
      <ChakraLink as={Link} to="/?status=visited">
        TO VISIT
      </ChakraLink>
    </Box>
  </VStack>
);

export default SidebarContent;
