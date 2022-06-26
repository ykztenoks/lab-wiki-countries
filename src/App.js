import { Navbar } from './components/Navbar/index';
import countries from './countries.json';
import { CountriesList } from './components/CountriesList/index';
import { Routes, Route } from 'react-router-dom';
import { CountryDetails } from './components/CountryDetails';
function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxheight: '90vh', overflow: 'scroll' }}
          >
            <div className="list-group-item list-group-item-action">
              <CountriesList countries={countries} />
            </div>
          </div>
          <Routes>
            <Route
              path={'/:alpha3Code'}
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
