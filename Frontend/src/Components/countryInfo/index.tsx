import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BackIcon from "../../Assets/BackIcon";
import { useApp } from "../../Helpers/useApp";
import Header from "../Header";

const CountryDetails = () => {
  const { name } = useParams();
  const [countryValues, setCountryValues] = useState<any>();
  const { countriesList } = useApp();

  useEffect(() => {
    const countryInfo = countriesList.find(
      (country) => country.name.common.toLowerCase() === name?.toLowerCase()
    );
    setCountryValues(countryInfo);
  }, [countriesList, name]);

  if (name === undefined) {
    return (
      <>
        <Header title={<BackComponent />} />
        <Flex
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          mt={80}
        >
          <Text>The country name is required</Text>
        </Flex>
      </>
    );
  }

  if (name === undefined || name === null) {
    return (
      <>
        {" "}
        <Header title={<BackComponent />} />
        <Flex
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          mt={80}
        >
          <Text>The country named {name} doesn't exist.</Text>'
        </Flex>
      </>
    );
  }
  let nativeNames: any = null;
  let currencies: any = null;
  let languages: any;
  if (
    countryValues !== undefined &&
    countryValues.name.common !== "Antarctica"
  ) {
    nativeNames = Object.values(countryValues?.name?.nativeName);
    currencies = Object.values(countryValues?.currencies);
    languages = Object.values(countryValues?.languages);
  }

  return (
    <>
      <Header title={<BackComponent />} />
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        mt={80}
        flexDirection={["column", "column", "column", "row"]}
        h="100vh - 70px"
      >
        <Image
          src={countryValues?.flags?.svg}
          width={["90%", "80%", "60", "45%"]}
          mb={[6, 6, 6, 0]}
        />
        <Box>
          <Heading mb={5}>{countryValues?.name?.common}</Heading>
          <Flex gap={5}>
            <Flex flexDirection={["column"]} mr={10}>
              {nativeNames !== null ? (
                <Text>
                  <Label>Native Name</Label>
                  {nativeNames[0].common}
                </Text>
              ) : null}
              <Text>
                <Label>Population</Label>
                {countryValues?.population}
              </Text>
              <Text>
                <Label>Region</Label>
                {countryValues?.region}
              </Text>
              {countryValues?.subregion ? (
                <Text>
                  <Label>Sub Region</Label>
                  {countryValues?.subregion}
                </Text>
              ) : null}
              {countryValues?.capital !== undefined ? (
                <Text>
                  <Label>Capital</Label>
                  {countryValues?.capital.toString()}
                </Text>
              ) : null}
            </Flex>
            <Spacer />
            <Flex flexDirection="column">
              {countryValues?.tld !== undefined ? (
                <Text>
                  <Label>Top Level Domain</Label>
                  {countryValues?.tld[0]}
                </Text>
              ) : null}
              {currencies !== null ? (
                <Text>
                  <Label>Currencies</Label>
                  {currencies.map((currency: any) => currency.name)}
                </Text>
              ) : null}
              {languages ? (
                <Text>
                  <Label>Languages</Label>
                  {languages.toString()}
                </Text>
              ) : null}
            </Flex>
          </Flex>
          {countryValues?.borders?.length > 0 ? (
            <Box mt={10}>
              <Text>
                <Label>Border Countries</Label>
                {countryValues?.borders?.map((b: string) => (
                  <Badge p={1} mx={2}>
                    {b}
                  </Badge>
                ))}
              </Text>
            </Box>
          ) : null}
        </Box>
      </Flex>
    </>
  );
};

const Label = ({ children }: { children?: any }) => (
  <span style={{ fontWeight: "bold" }}>{children}: </span>
);
const BackComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  return (
    <Button border={0} background="transparent" onClick={() => navigate(from)}>
      <BackIcon /> BACK
    </Button>
  );
};
export default CountryDetails;
