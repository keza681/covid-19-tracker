/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const actualDate = () => {
  const date = new Date();

  const newDate = date.getDate();
  let newMonth = date.getMonth();
  const year = date.getFullYear();
  newMonth += 1;

  const dateString = `${year}-${newMonth <= 9 ? `0${newMonth}` : newMonth}-${(newDate <= 9 ? `0${newDate}` : newDate)}`;
  return dateString;
};

export function Country({ name, cases_confirmed }) {
  return (
    <div className="card">
      <NavLink to={`/${name}`}>
        <li className="countryCard">
          <div className="mapBox">
            <img
              className="map"
              src="https://cdn.pixabay.com/photo/2020/04/29/07/54/coronavirus-5107715_960_720.png"
              alt="covid img"
            />
          </div>
          <p>{name}</p>
          <h4>{cases_confirmed}</h4>
        </li>
      </NavLink>
    </div>
  );
}

Country.propTypes = {
  name: PropTypes.string.isRequired,
  cases_confirmed: PropTypes.number.isRequired,
};

function Countries() {
  const [search, setSearch] = useState('');
  const countries = useSelector((state) => state.covidReducers);
  const date = actualDate();

  const handleSearch = (e) => setSearch((e.target.value).toLowerCase());
  const filteredCountries = countries.filter((country) => country.id.includes(search));

  return (
    <div>
      <header className="cover">
        <div className="title">
          <div className="logo">
            <div>
              <h1>Covid Cases</h1>
            </div>
          </div>
        </div>
      </header>
      <div className="search">
        <div className="myDate">
          <h2> Stats by country</h2>
          <h3 className="date">{date}</h3>
        </div>
        <input type="text" name="search" id="search" placeholder="search here" value={search} onChange={handleSearch} className="inputSearch" />
      </div>
      <ul className="myCounty">
        {filteredCountries.map(({ id, name, cases_confirmed }) => (
          <Country
            key={id}
            id={id}
            name={name}
            cases_confirmed={cases_confirmed}
          />
        ))}
      </ul>
    </div>
  );
}

export default Countries;
