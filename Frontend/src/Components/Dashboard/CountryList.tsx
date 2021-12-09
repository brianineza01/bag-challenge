import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import TickIcon from "../../Assets/TickIcon";
import TrashIcon from "../../Assets/TrashIcon";
import Header from "../Header";
import Find from "./Find";

const CountryList = ({ title, list }: { title: string; list: any[] }) => {
  const Countries = list.map((item) => {
    let currency: string | null = "";
    if (item.currencies === undefined) {
      currency = null;
    } else {
      for (const cur in item?.currencies) {
        currency = `${currency} ${cur}`;
      }
    }
    let capital: string | null =
      item.capital === undefined ? null : item.capital[0];
    return (
      <CountryBox
        name={item?.name.common}
        population={item?.population}
        capital={capital}
        currency={currency}
        flag={item?.flags.png}
      />
    );
  });

  return (
    <>
      <Header
        // showSidebarButton={variants?.navigationButton}
        // onShowSidebar={toggleSidebar}
        title={<Text fontSize="3xl">{title}</Text>}
      />
      <Find />
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {Countries}
      </Grid>
    </>
  );
};

export default CountryList;

const CountryBox = ({
  name,
  population,
  capital,
  currency,
  flag,
}: {
  name: string;
  population: string;
  capital: string | null;
  currency: string | null;
  flag?: string;
}) => {
  const boxBackgroundColor = useColorModeValue("#F2F2F2", "#2e3542");
  const iconBackgroundColor = useColorModeValue("#D9D9D9", "#48546b");
  const iconColor = useColorModeValue("white", "black");

  return (
    <Flex
      bg={boxBackgroundColor}
      min-h="350px"
      w="250px"
      borderRadius="10px"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Image src={flag} borderRadius="10px" />
      <Box p="20px">
        <Heading size="md">{name}</Heading>
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
        <TrashIcon bg={iconBackgroundColor} color={iconColor} />
        <TickIcon bg={iconBackgroundColor} color={iconColor} />
      </Flex>
    </Flex>
  );
};
