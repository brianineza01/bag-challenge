import { useApp } from "../../Helpers/useApp";
import { useSearchParams } from "react-router-dom";
import CountryList from "../Dashboard/CountryList";
import { useEffect, useState } from "react";

const UserList = () => {
  const { userCountryList } = useApp();
  const [filteredValues, setFilteredValues] = useState(userCountryList);
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  // function to filter according to status
  useEffect(() => {
    let results;
    if (status === "to visit" || status === "visited") {
      results = userCountryList.filter(
        (country) => country.userStatus === status
      );
    } else {
      results = userCountryList;
    }
    setFilteredValues(results);
  }, [userCountryList, status]);

  return <CountryList title="My List" list={filteredValues} />;
};

export default UserList;
