import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
  Link,
} from "@chakra-ui/react";
import { VARIANT_COLOR } from "../../Config/stylesConstants";
import Navigation from "../Navigation";

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

const LoginForm = () => {
  return (
    <Box>
      <form>
        <FormControl mt={6}>
          <FormLabel>Email Address</FormLabel>
          <Input type="email" placeholder="Enter your email address" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="Password" placeholder="Enter your Password address" />
        </FormControl>

        <Stack isInline justifyContent={"space-between"} mt={4}>
          <Box>
            <Checkbox>Remember Me</Checkbox>
          </Box>
          <Box>
            <Link color={`${VARIANT_COLOR}.500`}>Forgot Password?</Link>
          </Box>
        </Stack>
        <Button colorScheme={VARIANT_COLOR} width="full" mt={6}>
          Sign In
        </Button>
      </form>
    </Box>
  );
};

export default Login;
