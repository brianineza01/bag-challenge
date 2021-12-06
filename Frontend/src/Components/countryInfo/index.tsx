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
import BackIcon from "../../Assets/BackIcon";
import Header from "../Header";

const CountryDetails = () => {
  return (
    <>
      <Header title={<BackComponent />} />
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        mt={80}
      >
        <Image
          src="https://s3-alpha-sig.figma.com/img/0a05/4c7e/5fc5feec279da74a355565cbb064fc3b?Expires=1639353600&Signature=QZwXzROvKJgRcUMgdW3s3PWPTjnujqI6y6j3SZjGxnBQo-VNZwY2W~zzMoyPzO~SsguECLd68HYJR6xlb8M1Fx~Vu36CLue8MW-NbH8nYmfIx7UF7tn6wwGZ-CiGsFVA4E0xJArf~IzyAtNOcdvvuQH-6g-GYuGsr2~816QrpQfqwfneSHir71ZBpyzYwSKuL-iwf3WjNO5~7qvmLtc4YPu~fyLN5zoWMS0HY9~4HwQoXXNX8pdRbenKBJ6MVj5yIsRzFJMogcKIDDh96mq-ztUj~teYczpz5c11v-QbM6kf~ixXwTnj-VOBAg9UA1FGR0-~3k4R-gBdn2Y9Dj0Omw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          width="45%"
        />
        <Box>
          <Heading mb={5}>Belgium</Heading>
          <Flex gap={5}>
            <Flex flexDirection="column" mr={10}>
              <Text>
                <Label>Native Name:</Label>
                Belgïë
              </Text>
              <Text>
                <Label>Population</Label>
                11.319.511
              </Text>
              <Text>
                <Label>Region</Label>
                Europe
              </Text>
              <Text>
                <Label>Sub Region</Label>
                Western Europe
              </Text>
              <Text>
                <Label>Capital</Label>
                Brussels
              </Text>
            </Flex>
            <Spacer />
            <Flex flexDirection="column">
              <Text>
                <Label>Top Level Domain</Label>
                .be
              </Text>
              <Text>
                <Label>Currencies</Label>
                Euro
              </Text>
              <Text>
                <Label>Languages</Label>
                Dutch, French, German
              </Text>
            </Flex>
          </Flex>
          <Box mt={10}>
            <Text>
              <Label>Border Countries</Label>
              <Badge p={1} mx={2}>
                France
              </Badge>
              <Badge p={1} mx={2}>
                Germany
              </Badge>
              <Badge p={1} mx={2}>
                Netherlands
              </Badge>
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

const Label = ({ children }: { children?: any }) => (
  <span style={{ fontWeight: "bold" }}>{children}: </span>
);
const BackComponent = () => {
  return (
    <Button border={0} background="transparent">
      <BackIcon /> BACK
    </Button>
  );
};
export default CountryDetails;
