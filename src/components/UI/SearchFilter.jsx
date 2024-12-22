import React from 'react'

const SearchFilter = ({search,setSearch,filter,setFilter,countryData,setCountryData}) => {
    const HandleInputChange = (event) => {
        setSearch(event.target.value)
        event.preventDefault();
    }
    const HandleFilterChange = (event) => {
        setFilter(event.target.value)
        event.preventDefault();
  }
  const sortCountries = (value) => {
    const sortCountry = [...countryData].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountryData(sortCountry);
  };
  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        placeholder="Country Name"
        name="CountryName"
        value={search}
        onChange={HandleInputChange}
        className='rounded-full pl-10'
      />
      <div>
        <button onClick={() => sortCountries("asc")}>Asc</button>
      </div>

      <div>
        <button onClick={() => sortCountries("des")}>Desc</button>
      </div>
      <div>
        <select
          className="select-section"
          value={filter}
          onChange={HandleFilterChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
}
export default SearchFilter
