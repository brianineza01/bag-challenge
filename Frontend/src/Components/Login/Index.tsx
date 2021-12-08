import { Box, Flex, Heading } from "@chakra-ui/react";
import Navigation from "../Navigation";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <Box>
      <Navigation />
      <Flex
        minHeight="calc(100vh - 70px)"
        width="full"
        align="center"
        justifyContent="center"
      >
        <Box
          p={10}
          borderWidth={1}
          borderRadius={4}
          maxWidth="500px"
          boxShadow="lg"
        >
          <Heading as="h2" size="xl">
            Sign In to Your Account
          </Heading>
          <LoginForm />
        </Box>
      </Flex>
    </Box>
  );
};
export default Login;
