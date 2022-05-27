import React from "react";
import { useParams } from "react-router-dom";
import useCountry from "../custom-hooks/useCountry";

const OneCountry = () => {
  const name = useParams();
  const selectedCountry = name.countryName;

  const { data, error, loading } = useCountry(
    `https://restcountries.com/v3.1/name/${selectedCountry}`
  );

  if (error) return <h1>Error!</h1>;
  if (loading) return <h1>Loading..</h1>;

  return (
    <div>
      {data.map((country) => {
        return (
          <div>
            <h1> {country.name.common}</h1>
            <img src={country.flags.png} alt="Flag" />
            <p> Capital : {country.capital}</p>
            <p> Region : {country.region}</p>
            <p> Population : {country.population}</p>
            Languages:
            {country.languages ? (
              Object.values(country.languages).map((lang) => {
                return <p> {lang}</p>;
              })
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default OneCountry;
