/* eslint-disable camelcase */
export const GET = 'GET';

export const get = (payload) => ({ type: GET, payload });

// Reducer
const covidReducers = (state = [], action = {}) => {
  switch (action.type) {
    case GET:
      return action.payload;
    default:
      return state;
  }
};

const dateFormater = () => {
  const date = new Date();

  const d = (date.getDate()) - 1;
  let m = date.getMonth();
  const y = date.getFullYear();
  m += 1;

  const dateString = `${y}-${m <= 9 ? `0${m}` : m}-${(d <= 9 ? `0${d}` : d)}`;
  return dateString;
};

const date = dateFormater();

const dataHandler = (fetchedData) => {
  const newData = fetchedData.dates[date].countries;
  const obj = Object.entries(newData);
  const resultArray = [];
  for (let i = 0; i <= obj.length - 1; i += 1) {
    const objdata = obj[i][1];
    const {
      id, name, regions, cases_confirmed, total_deaths, open_cases, recovered,
    } = objdata;
    resultArray.push({
      id, name, regions, cases_confirmed, total_deaths, open_cases, recovered,
    });
  }
  return resultArray;
};

const url = `https://api.covid19tracking.narrativa.com/api/${date}`;

const fetchData = () => {
  const resultFetch = fetch(url)
    .then((res) => res.json())
    .catch((error) => error);
  return resultFetch;
};

export const getCountries = () => async (dispatch) => {
  const res = await fetchData();
  const records = dataHandler(res);
  dispatch(get(records));
};

export default covidReducers;
