import { useEffect, useState } from "react";
import superFetch from "../../Config/superFetch";
import { useApp } from "../../Helpers/useApp";
import CountryList from "../Dashboard/CountryList";

const UserList = () => {
  const [userList, setUserList] = useState<any>([]);
  const { countriesList } = useApp();

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        let mappedCountryList: any[] = [];
        const { data } = await superFetch.get("/country");
        const countries = data.countries;

        for (let index = 0; index < countries.length; index++) {
          const fullCountryInfo = countriesList.find(
            (country) =>
              country.name.common.toLowerCase() ===
              countries[index].name.toLowerCase()
          );
          mappedCountryList.push(fullCountryInfo);
        }
        setUserList(mappedCountryList);
      } catch (error) {
        console.log("error");
      }
    };
    fetchUserList();
  }, [countriesList]);

  return <CountryList title="My List" list={userList} />;
};

export default UserList;
