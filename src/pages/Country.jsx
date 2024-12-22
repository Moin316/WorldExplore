import React, { useEffect, useTransition, useState } from 'react'
import {  getCountryData, getCountryIndData } from '../api/PostApi';
import { Loader } from '../components/UI/Loader';
import CountryCard from '../components/Layout/CountryCard';
import SearchFilter from '../components/UI/SearchFilter';
const Country = () => {
  const [isPending,startTranition]=useTransition();
  const [countryData, setCountryData]=useState([]);
  const [search,setSearch]=useState('');
  const [filter,setFilter]=useState("All");
  useEffect(()=>{
    startTranition(async()=>{
      const response=await getCountryData();
      console.log(response);
      setCountryData(response.data);
    });
  },[])
  if (isPending)
    return <Loader/> 
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    // console.log(country.name.common);
    return true;
  };
  const filteredRegion=((country)=>
  {
    if(filter==='All') return true;
    return country.region===filter;
  }
  )
  const filteredData=countryData.filter((currCountry)=>
      searchCountry(currCountry) && filteredRegion(currCountry)
  )
  return(
    <section className='country-section'>
      <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countryData={countryData} setCountryData={setCountryData}/>
        <ul className='grid grid-four-cols'>
          {filteredData.map((country,index)=>{
            return <CountryCard country={country} key={index}/>
          })}
        </ul>
    </section>
  )
}

export default Country
