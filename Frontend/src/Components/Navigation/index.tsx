import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import Logo from "../Logo";
import ThemeSwitcher from "../ThemeSwitcher/Index";

const Navigation: React.FC = () => {
  return (
    <Box h={70} p={5} px={[5, 10, 20]}>
      <Flex justifyContent="space-between">
        <Logo />
        <Flex justifyContent={"space-between"} w={["60%", "40%", "30%"]}>
          <ThemeSwitcher />
          <ChakraLink as={Link} to="/login">
            Login
          </ChakraLink>
          <ChakraLink as={Link} to="/register">
            Register
          </ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation;
