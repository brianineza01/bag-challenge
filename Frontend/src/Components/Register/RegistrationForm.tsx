import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { Select } from "chakra-react-select";
import { Formik, Form, Field } from "formik";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { VARIANT_COLOR } from "../../Config/stylesConstants";
import superFetch from "../../Config/superFetch";
import {
  validateEmail,
  validatePhoneNumber,
  validatePassword,
  validateConfirmPassword,
} from "../../Helpers/validator";

const RegistrationForm: React.FC = () => {
  const [countryOptions, setCountryOptions] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  // function to fetch country data from api and set the options
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");

      // extracting country names
      const extractedData = data.map(
        (country: { name: { common: string } }) => country.name.common
      );
      //sorting the countries
      extractedData.sort();
      const countryData = extractedData.map((country: string) => ({
        value: country,
        label: country,
      }));
      setCountryOptions(countryData);
    };
    fetchData();
  }, []);

  const handleSubmit = async (values: any, actions: any) => {
    const submittedValues = {
      ...values,
      country: values.country.value,
    };
    try {
      const { status } = await superFetch.post("/signup", submittedValues);
      if (status === 201) {
        toast({
          title: "Account created.",
          description: "We've created your account for you, proceed to login.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        return navigate("/login");
      }
    } catch (error: any) {
      const { status } = error.toJSON();
      if (status === 409)
        return toast({
          title: "Error Occurred.",
          description: `User with email: ${values.email} already exists. log in to access your account`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      return toast({
        title: "Internal server error.",
        description: `Internal Server error occurred. try again later.`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          country: "",
          phoneNumber: "",
          dateOfBirth: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        {(props) => (
          <Form>
            <Field name="firstName">
              {({ field }: { field: any }) => (
                <FormControl mt={6} isRequired>
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <Input
                    type="text"
                    id="firstName"
                    placeholder="Enter your First Name"
                    {...field}
                  />
                </FormControl>
              )}
            </Field>
            <Field name="lastName">
              {({ field }: { field: any }) => (
                <FormControl mt={6} isRequired>
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter your Last Name"
                    id="lastName"
                    {...field}
                  />
                </FormControl>
              )}
            </Field>
            <Field name="email" validate={validateEmail}>
              {({ field, form }: { field: any; form: any }) => (
                <FormControl
                  mt={6}
                  isRequired
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel>Email Address</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    {...field}
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="phoneNumber" validate={validatePhoneNumber}>
              {({ field, form }: { field: any; form: any }) => (
                <FormControl
                  mt={6}
                  isRequired
                  isInvalid={
                    form.errors.phoneNumber && form.touched.phoneNumber
                  }
                >
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    type="number"
                    placeholder="Enter your Phone number"
                    id="phoneNumber"
                    {...field}
                  />
                  <FormErrorMessage>{form.errors.phoneNumber}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="dateOfBirth">
              {({ field }: { field: any }) => (
                <FormControl mt={6} isRequired>
                  <FormLabel>Date of Birth</FormLabel>
                  <Input
                    type="date"
                    placeholder="Enter your date of birth"
                    id="dateOfBirth"
                    {...field}
                  />
                </FormControl>
              )}
            </Field>
            <Field name="country">
              {({ field, form }: { field: any; form: any }) => (
                <FormControl mt={6} isRequired>
                  <FormLabel>Country</FormLabel>
                  <Select
                    options={countryOptions}
                    placeholder="Where are you from?"
                    selectedOptionStyle="check"
                    id="country"
                    name="country"
                    {...field}
                    onChange={(option: { value: string; label: string }) =>
                      form.setFieldValue("country", option)
                    }
                  />
                </FormControl>
              )}
            </Field>
            <Field name="password" validate={validatePassword}>
              {({ field, form }: { field: any; form: any }) => (
                <FormControl
                  mt={4}
                  isRequired
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      pr="4.5rem"
                      placeholder="Enter your Password"
                      id="password"
                      {...field}
                    />
                    <InputRightElement
                      width="4.5rem"
                      style={{ zIndex: "unset" }}
                    >
                      <Button
                        h="1.75rem"
                        size="sm"
                        onClick={() => setShowPassword((state) => !state)}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field
              name="confirmPassword"
              validate={(value: string) =>
                validateConfirmPassword(value, props.values.password)
              }
            >
              {({ field, form }: { field: any; form: any }) => (
                <FormControl
                  mt={4}
                  isRequired
                  isInvalid={
                    form.errors.confirmPassword && form.touched.confirmPassword
                  }
                >
                  <FormLabel>Password Confirmation</FormLabel>
                  <InputGroup>
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      pr="4.5rem"
                      id="confirmPassword"
                      placeholder="Confirm password"
                      {...field}
                    />
                    <InputRightElement
                      width="4.5rem"
                      style={{ zIndex: "unset" }}
                    >
                      <Button
                        h="1.75rem"
                        size="sm"
                        onClick={() =>
                          setShowConfirmPassword((state) => !state)
                        }
                      >
                        {showConfirmPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {form.errors.confirmPassword}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              colorScheme={VARIANT_COLOR}
              width="full"
              mt={6}
              isLoading={props.isSubmitting}
              type="submit"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default RegistrationForm;
