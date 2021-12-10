import { useApp } from "../../Helpers/useApp";
import CountryList from "../Dashboard/CountryList";

const UserList = () => {
  const { userCountryList } = useApp();

  return <CountryList title="My List" list={userCountryList} />;
};

export default UserList;
