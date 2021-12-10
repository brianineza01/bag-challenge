import { useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import superFetch from "../Config/superFetch";
import { sortCountries } from "../Helpers/sortCountries";

interface AppContextType {
  countriesList: any[];
  fetchCountriesList: (callback?: VoidFunction) => void;
  userCountryList: any[];
  fetchUserCountryList: () => void;
}

const AppContext = React.createContext<AppContextType>(null!);

function AppProvider({ children }: { children: React.ReactNode }) {
  const [countriesList, setCountriesList] = useState([]);
  const [userCountryList, setUserCountryList] = useState([]);

  const toast = useToast();
  const fetchCountriesList = async (callback?: () => void) => {
    try {
      const result = await axios.get("https://restcountries.com/v3.1/all");
      const data = result.data;
      data.sort(sortCountries);
      setCountriesList(data);

      if (callback) callback();
    } catch (error: any) {
      toast({
        title: "Error occurred while fetching all countries",
        description: error.toJSON().message,
        isClosable: true,
        duration: 7000,
        status: "error",
      });
    }
  };

  const fetchUserCountryList = async () => {
    try {
      let mappedCountryList: any = [];
      const { data } = await superFetch.get("/country");
      const countries = data.countries;

      for (let index = 0; index < countries.length; index++) {
        const fullCountryInfo: any = countriesList.find(
          (country: any) =>
            country.name.common.toLowerCase() ===
            countries[index].name.toLowerCase()
        );
        if (fullCountryInfo === undefined) {
          continue;
        }
        fullCountryInfo.userStatus = countries[index].status;
        mappedCountryList.push(fullCountryInfo);
      }
      setUserCountryList(mappedCountryList);
    } catch (error: any) {
      toast({
        title: "Error occurred while fetching all countries",
        description: error.toJSON().message,
        isClosable: true,
        duration: 7000,
        status: "error",
      });
    }
  };

  const value = {
    fetchCountriesList,
    countriesList,
    fetchUserCountryList,
    userCountryList,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export { AppContext };
export default AppProvider;
