import { Link } from 'react-router-dom';
export function CountriesList({ countries }) {
  return countries.map((country) => {
    return (
      <Link
        className="list-group-item list-group-item-action"
        to={`/${country.alpha3Code}`}
      >
        <h1>{country.alpha3Code}</h1>
      </Link>
    );
  });
}
