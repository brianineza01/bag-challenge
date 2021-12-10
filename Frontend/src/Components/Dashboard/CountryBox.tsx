/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  useColorModeValue,
  Flex,
  Box,
  Heading,
  Image,
  Text,
  useToast,
  Link as ChakraLink,
} from "@chakra-ui/react";
import TickIcon from "../../Assets/TickIcon";
import PlusIcon from "../../Assets/PlusIcon";
import TrashIcon from "../../Assets/TrashIcon";
import superFetch from "../../Config/superFetch";
import { useApp } from "../../Helpers/useApp";
import { Link, useLocation } from "react-router-dom";

const CountryBox = ({
  name,
  population,
  capital,
  currency,
  flag,
  status,
}: {
  name: string;
  population: string;
  capital: string | null;
  currency: string | null;
  flag?: string;
  status?: string | undefined;
}) => {
  const boxBackgroundColor = useColorModeValue("#F2F2F2", "#2e3542");
  const iconBackgroundColor = useColorModeValue("#D9D9D9", "#48546b");
  const iconColor = useColorModeValue("white", "black");
  const iconFillColor = useColorModeValue("#14C704", "#197311");

  const { fetchUserCountryList } = useApp();
  const toast = useToast();

  const location = useLocation();

  const handleDelete = async (country: string) => {
    try {
      const queryString = `/country/delete/${country}`;
      const { data } = await superFetch.delete(queryString);
      fetchUserCountryList();
      toast({
        title: "Success",
        description: "Country Deleted successfully from your list",
        isClosable: true,
        duration: 3000,
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.toJSON().message,
        isClosable: true,
        duration: 3000,
        status: "error",
      });
    }
  };
  const handleAdd = async (country: string) => {
    try {
      const { data } = await superFetch.post("/country/add", {
        country: country,
      });
      fetchUserCountryList();
      toast({
        title: "Success",
        description: "Country added successfully",
        isClosable: true,
        duration: 3000,
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.toJSON().message,
        isClosable: true,
        duration: 3000,
        status: "error",
      });
    }
  };
  const handleTick = async (country: string, status: string | undefined) => {
    try {
      if (status === undefined) {
        return toast({
          title: "Error",
          description:
            "You have to add a country before ticking that you've visited it",
          isClosable: true,
          duration: 3000,
          status: "error",
        });
      }
      let submittedStatus = status === "visited" ? "to visit" : "visited";
      const queryString = `/country/update/${country}?status=${submittedStatus}`;
      const { data } = await superFetch.patch(queryString);
      fetchUserCountryList();
      toast({
        title: "Success",
        description: "Country updated successfully",
        isClosable: true,
        duration: 3000,
      });
    } catch (error: any) {
      toast({
        title: "Error while updating country",
        description: error.toJSON().message,
        isClosable: true,
        duration: 3000,
        status: "error",
      });
    }
  };

  const link = `/country/${name}`;

  return (
    <Flex
      bg={boxBackgroundColor}
      min-h="350px"
      w="250px"
      borderRadius="10px"
      flexDirection="column"
      justifyContent="space-between"
    >
      <ChakraLink
        as={Link}
        to={link}
        textDecoration="none"
        state={{ from: location }}
      >
        <Image src={flag} borderRadius="10px" />
      </ChakraLink>

      <Box p="20px">
        <ChakraLink
          as={Link}
          to={link}
          textDecoration="none"
          state={{ from: location }}
        >
          <Heading size="md">{name}</Heading>
        </ChakraLink>
        <Text>
          <span style={{ display: "block" }}>Population: {population}</span>
          {capital === null ? null : (
            <span style={{ display: "block" }}>Capital: {capital}</span>
          )}
          {currency === null ? null : (
            <span style={{ display: "block" }}>Currency: {currency}</span>
          )}
        </Text>
      </Box>

      <Flex justifyContent="flex-end" px="10px" py="10px">
        {status === undefined ? (
          <PlusIcon
            bg={iconBackgroundColor}
            color={iconColor}
            onClick={() => handleAdd(name)}
          />
        ) : (
          <TrashIcon
            bg={iconBackgroundColor}
            color={iconColor}
            onClick={() => handleDelete(name)}
          />
        )}

        <TickIcon
          bg={status === "visited" ? iconFillColor : iconBackgroundColor}
          color={iconColor}
          hoverColor={
            status !== "visited" ? iconFillColor : iconBackgroundColor
          }
          onClick={() => handleTick(name, status)}
        />
      </Flex>
    </Flex>
  );
};

export default CountryBox;
