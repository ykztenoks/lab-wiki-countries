import React from 'react';
import { useParams, Link } from 'react-router-dom';

export function CountryDetails({ countries }) {
  const { alpha3Code } = useParams();
  const country = countries.filter((countryCurrent) => {
    return countryCurrent.alpha3Code === alpha3Code;
  });

  return (
    <div class="col-7">
      <img
        src={`https://flagpedia.net/data/flags/icon/120x90/${country[0].alpha2Code.toLowerCase()}.png`}
        alt="countryflag"
      />
      <h1>{country[0].name.official}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country[0].capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country[0].area}km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country[0].borders.map((current) => {
                  return (
                    <div>
                      <Link to={`/${current}`}>{current}</Link>
                    </div>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
