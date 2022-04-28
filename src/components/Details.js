/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Region({
  name, Confirmed, allDeaths, newCases, allRecovered,
}) {
  return (
    <li className="detailsRow">
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <h4>
          Confirmed:
          {Confirmed}
        </h4>
        <h4>
          Deaths:
          {allDeaths}
        </h4>
        <h4>
          Open Cases:
          {newCases}
        </h4>
        <h4>
          Recovered:
          {allRecovered}
        </h4>
      </div>
    </li>
  );
}

Region.propTypes = {
  name: PropTypes.string.isRequired,
  Confirmed: PropTypes.number.isRequired,
  allDeaths: PropTypes.number.isRequired,
  newCases: PropTypes.number.isRequired,
  allRecovered: PropTypes.number.isRequired,
};

function Regions() {
  const countries = useSelector((state) => state.covidReducers);
  const { id } = useParams();
  let country = [];
  countries.forEach((element) => {
    if (element.name === id) {
      country = element;
    }
  });

  const {
    name, regions, cases_confirmed, total_deaths, open_cases, recovered,
  } = country;

  return (
    <div>
      <div className="detailsBaner">
        <img
          className="map2"
          src="https://cdn.pixabay.com/photo/2020/04/29/07/54/coronavirus-5107715_960_720.png"
          alt="map"
          /* eslint-disable no-param-reassign */
          onError={(event) => {
            event.target.src = 'https://img.icons8.com/pastel-glyph/120/000000/map.png';
            event.onerror = null;
          }}
        />
        <div className="countryStatus">
          <h2>{name}</h2>
          <h4>
            Today Confirmed:
            {' '}
            {cases_confirmed}
          </h4>
          <h4>
            Today Deaths:
            {' '}
            {total_deaths}
          </h4>
          <h4>
            Today Open Cases:
            {' '}
            {open_cases}
          </h4>
          <h4>
            Today Recovered:
            {' '}
            {recovered}
          </h4>
        </div>
      </div>
      <div className="search">
        <h2>City/Town breakdown - 2022</h2>
      </div>
      <ul className="regionContainer">
        {regions.length === 0 ? (<h2 style={{ margin: '0.5% 5%' }}>No data available </h2>)
          : regions.map(({
            id, name, cases_confirmed, total_deaths, open_cases, recovered,
          }) => (
            <Region
              key={id}
              id={id}
              name={name}
              Confirmed={cases_confirmed}
              allDeaths={total_deaths}
              newCases={open_cases}
              allRecovered={recovered}
            />
          ))}
      </ul>
    </div>
  );
}

export default Regions;
