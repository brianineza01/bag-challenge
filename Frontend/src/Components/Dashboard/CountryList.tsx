import { Grid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../Header";
import CountryBox from "./CountryBox";
import Find from "./Find";

const CountryList = ({ title, list }: { title: string; list: any[] }) => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState(list);
  const [filter, setFilter] = useState([]);

  // initialize search data
  useEffect(() => {
    setSearchData(list);
  }, [list]);

  // function to filter the values
  useEffect(() => {
    if (filter.length === 0) {
      return setSearchData(list);
    }

    const filteredArray = list.filter((el) =>
      filter.some((fil: any) => el.continents[0].toLowerCase() === fil.value)
    );

    setSearchData(filteredArray);
  }, [filter, list]);

  // filter the values when search is triggered or the list of country is updated
  useEffect(() => {
    if (search === "") {
      return setSearchData(list);
    }
    const searchResults = list?.filter((element) => {
      if (element?.capital === undefined) {
        return (
          element?.name.common.toLowerCase().search(search.toLowerCase()) >
            -1 ||
          element?.name.official.toLowerCase().search(search.toLowerCase()) > -1
        );
      }
      return (
        element?.name.common.toLowerCase().search(search.toLowerCase()) > -1 ||
        element?.name.official.toLowerCase().search(search.toLowerCase()) >
          -1 ||
        element?.capital[0].toLowerCase().search(search.toLowerCase()) > -1
      );
    });
    setSearchData(searchResults);
  }, [search, list]);

  const Countries = searchData.map((item) => {
    let currency: string | null = "";
    if (item?.currencies === undefined) {
      currency = null;
    } else {
      for (const cur in item?.currencies) {
        currency = `${currency} ${cur}`;
      }
    }
    let capital: string | null =
      item?.capital === undefined ? null : item?.capital[0];
    return (
      <CountryBox
        name={item?.name.common}
        population={item?.population}
        capital={capital}
        currency={currency}
        flag={item?.flags.png}
        key={item?.name.common}
        status={item?.userStatus}
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
      <Find
        setSearch={setSearch}
        search={search}
        setFilter={setFilter}
        filter={filter}
      />
      <Grid
        templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={6}
      >
        {Countries}
      </Grid>
    </>
  );
};

export default CountryList;
