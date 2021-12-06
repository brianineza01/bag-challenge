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

const CountryList = () => {
  return (
    <>
      <Header
        // showSidebarButton={variants?.navigationButton}
        // onShowSidebar={toggleSidebar}
        title={<Text fontSize="3xl">MY LIST</Text>}
      />
      <Find />
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
      </Grid>
    </>
  );
};

export default CountryList;

const CountryBox = () => {
  const boxBackgroundColor = useColorModeValue("#F2F2F2", "#2e3542");
  const iconBackgroundColor = useColorModeValue("#D9D9D9", "#48546b");
  const iconColor = useColorModeValue("white", "black");

  return (
    <Flex
      bg={boxBackgroundColor}
      h="350px"
      w="250px"
      borderRadius="10px"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Image
        src="https://s3-alpha-sig.figma.com/img/0a05/4c7e/5fc5feec279da74a355565cbb064fc3b?Expires=1639353600&Signature=QZwXzROvKJgRcUMgdW3s3PWPTjnujqI6y6j3SZjGxnBQo-VNZwY2W~zzMoyPzO~SsguECLd68HYJR6xlb8M1Fx~Vu36CLue8MW-NbH8nYmfIx7UF7tn6wwGZ-CiGsFVA4E0xJArf~IzyAtNOcdvvuQH-6g-GYuGsr2~816QrpQfqwfneSHir71ZBpyzYwSKuL-iwf3WjNO5~7qvmLtc4YPu~fyLN5zoWMS0HY9~4HwQoXXNX8pdRbenKBJ6MVj5yIsRzFJMogcKIDDh96mq-ztUj~teYczpz5c11v-QbM6kf~ixXwTnj-VOBAg9UA1FGR0-~3k4R-gBdn2Y9Dj0Omw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        borderRadius="10px"
      />
      <Box p="20px">
        <Heading size="md">Rwanda</Heading>
        <Text>
          <span style={{ display: "block" }}>Population: 12.9 Million</span>
          <span style={{ display: "block" }}>Capital: Kigali</span>
          <span style={{ display: "block" }}>Currency: RWF</span>
        </Text>
      </Box>

      <Flex justifyContent="flex-end" px="10px" py="10px">
        <TrashIcon bg={iconBackgroundColor} color={iconColor} />
        <TickIcon bg={iconBackgroundColor} color={iconColor} />
      </Flex>
    </Flex>
  );
};
