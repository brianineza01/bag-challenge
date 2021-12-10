/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useApp } from "../../Helpers/useApp";
import CountryList from "../Dashboard/CountryList";

const Explore = () => {
  const [mappedList, setMappedList] = useState([]);
  const { countriesList, userCountryList } = useApp();

  useEffect(() => {
    const mapUserList = () => {
      let list = countriesList;
      if (countriesList.length === 0 || userCountryList.length === 0) return [];

      // loop to map through the the countries and retrieve the visited ones or to visit
      for (let index = 0; index < userCountryList.length; index++) {
        const fullCountryInfo: any = countriesList.find(
          (country: any) =>
            country.name.common.toLowerCase() ===
            userCountryList[index].name.common.toLowerCase()
        );
        const countryIndex = countriesList.findIndex(
          (country: any) =>
            country.name.common.toLowerCase() ===
            userCountryList[index].name.common.toLowerCase()
        );

        fullCountryInfo.userStatus = userCountryList[index].userStatus;
        list[countryIndex] = fullCountryInfo;
      }
      return list;
    };
    const mappedValues: any = mapUserList();
    setMappedList(mappedValues);
  }, [countriesList, userCountryList]);

  return <CountryList title="Explore" list={mappedList} />;
};

export default Explore;
