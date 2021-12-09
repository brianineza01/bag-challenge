import {
  Box,
  Flex,
  FormControl,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";

const SearchIcon = () => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentcolor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </Icon>
);
const Find = ({
  setSearch,
  search,
  setFilter,
  filter,
}: {
  setSearch: any;
  search: string;
  setFilter: any;
  filter: any;
}) => {
  const options = [
    { value: "africa", label: "Africa" },
    { value: "north america", label: "North America" },
    { value: "south america", label: "South America" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];
  const placeHolderColor = useColorModeValue("black", "white");
  const handleSearchChange = (event: any) => {
    setSearch(event.target.value);
  };

  const handleFilter = (selectedOptions: any) => {
    setFilter(selectedOptions);
  };
  return (
    <Flex p={5} px={0}>
      <Box>
        <InputGroup size="lg" bg="grey.900">
          <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
          <Input
            type="text"
            variant="filled"
            placeholder="Search For a Country ...."
            _placeholder={{ color: placeHolderColor }}
            value={search}
            onChange={handleSearchChange}
          />
        </InputGroup>
      </Box>
      <Spacer />
      <FormControl w="40%">
        <Select
          value={filter}
          isMulti
          options={options}
          placeholder="Filter by Region"
          closeMenuOnSelect={false}
          selectedOptionStyle="check"
          size="lg"
          tagVariant="filled"
          _placeholder={{ color: placeHolderColor }}
          onChange={handleFilter}
        />
      </FormControl>
    </Flex>
  );
};

export default Find;
