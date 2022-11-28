import React from 'react'
import style from './country.module.css'

const Country = (props) => {

    const {name, flags, capital, population, area} = props.country;
     
    // console.log(country)

    const handelRemoveCountry = (name) => {
      props.onRemove(name)
    }


  return (
     <article className={style.country}>
    
        <div>
            <img className={style.flag} src={flags.png} alt={name.common} ></img>
            <h3>Name: {name.common} </h3>
            <h3>Population: {population}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Area: {area}</h3>
           
            <button onClick={()=> {
              handelRemoveCountry(name.common)
            }} className={style.btn} >Remove</button>
        </div>
        
    </article>
  )
}

export default Country




// const serchCountry = (searchValue) => {
//   let value = searchValue.toLowerCase()
//   const newCountries = countries.filter((country) => {
//     const countryName = country.name.common.toLowerCase();
//     return countryName.startsWith(value)
//   });