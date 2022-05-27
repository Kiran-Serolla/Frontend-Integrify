// This hook is used to fetch one specific country
import React from 'react'
import { useEffect,useState } from 'react'

const useCountry = (url) => {
  const [error, setError] = useState()
  const [data, setdata] = useState()
  const [loading, setLoading] = useState(true)

 // const {name} = useParams()

  useEffect(() => {
    const getCountryDetails = async() =>{
      try {
        const response = await fetch (url)
       let countryData = await response.json()
        setdata(countryData)
      } catch(err){
        setError(err)
      } finally {
        setLoading(false)
      }

    }
   getCountryDetails()
  }, [url]);
  return {
    data,error,loading
  }
}

export default useCountry