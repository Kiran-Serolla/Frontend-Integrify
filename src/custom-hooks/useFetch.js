import React from "react";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const response = await fetch(url);
        let countriesData = await response.json();
        setData(countriesData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCountriesData();
  }, [url]);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch; // This hook is used to fetch all countries
