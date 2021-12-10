import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { VARIANT_COLOR } from "../../Config/stylesConstants";
import { useAuth } from "../../Helpers/useAuth";
import { validateEmail } from "../../Helpers/validator";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const auth = useAuth();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = async (values: any, actions: any) => {
    auth.signIn(values, (status: any) => {
      if (status !== "success") {
        return toast({
          title: "Error Occurred.",
          description: status,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
      navigate(from, { replace: true });
    });
  };

  return (
    <Box>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        {(props) => (
          <Form>
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
            <Field name="password">
              {({ field, form }: { field: any; form: any }) => (
                <FormControl mt={4} isRequired>
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
                </FormControl>
              )}
            </Field>

            <Stack isInline justifyContent={"space-between"} mt={4}>
              <Box>
                <Checkbox>Remember Me</Checkbox>
              </Box>
              {/* <Box>
            <Link color={`${VARIANT_COLOR}.500`}>Forgot Password?</Link>
          </Box> */}
            </Stack>
            <Button
              colorScheme={VARIANT_COLOR}
              width="full"
              mt={6}
              isLoading={props.isSubmitting}
              type="submit"
            >
              Log in
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
