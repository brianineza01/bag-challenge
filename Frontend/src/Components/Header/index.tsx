import {
  Box,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ThemeSwitcher from "../ThemeSwitcher/Index";
import PlaceHolderImage from "../../Assets/profileImagePlaceholder.jpg";
import { useAuth } from "../../Helpers/useAuth";

const Header = ({ title }: { title: any }) => {
  const iconColor = useColorModeValue("#212121", "#dedfe0");
  const iconBgColor = useColorModeValue("#F2F2F2", "#333b4d");
  const textColor = useColorModeValue("#999999", "#F7FAFC99");
  const imageBorderColor = useColorModeValue("black", "white");
  const { user } = useAuth();

  return (
    <Box h={70} p={5} px={0}>
      <Flex justifyContent="space-between" align="center">
        <Box>{title} </Box>
        <Spacer />
        <HStack spacing="24px">
          <HStack spacing="30px" justifyContent="center" align="center">
            <ThemeSwitcher />
            <Box borderRadius="50%" w="32px" h="32px" bg={iconBgColor} p="3px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke={iconColor}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </Box>
          </HStack>
          <HStack justifyContent="center" align="center">
            <Box>
              <Text display="inline" color={textColor}>
                Hey,{" "}
              </Text>
              <Text display="inline">
                <b>{user.firstName}</b>
              </Text>
            </Box>
            <Image
              src={PlaceHolderImage}
              borderRadius="full"
              boxSize="40px"
              alt="Dan Abramov"
              border={`2px solid ${imageBorderColor}`}
            />
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
