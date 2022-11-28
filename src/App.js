import React, { useEffect, useState } from 'react';

import Countries from './components/Countries'

import './App.css'
import Search from './components/Search';



const url = "https://restcountries.com/v3.1/all";

function App() {

  const [isLoding, setIsLoding] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries)

  const fetchData = async(url) => {
    setIsLoding(true);

    try{
      const response = await fetch(url);
      const data = await response.json();
  
      setCountries(data);
      setFilteredCountries(data)
      
      setIsLoding(false);
      setError(null);
      // console.log(countries);
    }
    catch(error){
      setIsLoding(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchData(url);

  }, []);

  const handelRemove = (name) =>{
    const filter = filteredCountries.filter((country) => country.name.common !== name)
    setFilteredCountries(filter)
  };


  const countrySearch = (searchValue) => {
    let value = searchValue.toLowerCase()
    const newCountries = countries.filter((country) => {
    const countryName = country.name.common.toLowerCase();
    return countryName.startsWith(value)
    });
    setFilteredCountries(newCountries)
    
  };

  return (
    <div>
        <h1>Country app</h1>

        
        <Search onSearch={countrySearch}></Search>
        {isLoding && <h2>Loding.....</h2>}
        {error && <h2>{error.message}</h2>}
        
        {countries && <Countries countries={filteredCountries}
        onRemove={handelRemove}></Countries>}

        
    </div>
  );
}

export default App;
