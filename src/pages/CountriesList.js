import * as React from "react";
import MyTable from "../Components/MyTable";
import useFetch from "../custom-hooks/useFetch";

const CountriesList = () => {
    const { data, error, loading } = useFetch(
    "https://restcountries.com/v3.1/all"
  );
  if (error) return <div>Error!</div>;
  if (loading) return <h1>Loading..</h1>;

  return (
    <div>
      <MyTable data={data} />
    </div>
  );
};

export default CountriesList;
