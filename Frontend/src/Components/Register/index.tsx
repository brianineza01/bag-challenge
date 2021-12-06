import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import Navigation from "../Navigation";
import { VARIANT_COLOR } from "../../Config/stylesConstants";
import { Select } from "chakra-react-select";

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

const RegistrationForm: React.FC = () => {
  const options = [{ value: "value", label: "label" }];
  return (
    <Box>
      <form>
        <FormControl mt={6}>
          <FormLabel>Firstname Name</FormLabel>
          <Input type="text" placeholder="Enter your First Name" />
        </FormControl>
        <FormControl mt={6}>
          <FormLabel>Last Name</FormLabel>
          <Input type="text" placeholder="Enter your Last Name" />
        </FormControl>
        <FormControl mt={6}>
          <FormLabel>Email Address</FormLabel>
          <Input type="email" placeholder="Enter your email address" />
        </FormControl>
        <FormControl mt={6}>
          <FormLabel>Phone Number</FormLabel>
          <Input type="number" placeholder="Enter your Phone number" />
        </FormControl>
        <FormControl mt={6}>
          <FormLabel>Date of Birth</FormLabel>
          <Input type="date" placeholder="Enter your date of birth" />
        </FormControl>
        <FormControl mt={6}>
          <FormLabel>Date of Birth</FormLabel>
          <Select
            options={options}
            placeholder="Where are you from?"
            closeMenuOnSelect={false}
            selectedOptionStyle="check"
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="Password" placeholder="Enter your Password" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password Confirmation</FormLabel>
          <Input type="Password" placeholder="Confirm password" />
        </FormControl>
        <Button colorScheme={VARIANT_COLOR} width="full" mt={6}>
          Register
        </Button>
      </form>
    </Box>
  );
};

export default Register;
