import { Box, Flex, Heading } from "@chakra-ui/react";

import Navigation from "../Navigation";
import RegistrationForm from "./RegistrationForm";

const Register: React.FC = () => {
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
          maxWidth="700px"
          boxShadow="lg"
        >
          <Heading as="h2" size="xl">
            Create Account to use Our App
          </Heading>
          <RegistrationForm />
        </Box>
      </Flex>
    </Box>
  );
};

export default Register;
