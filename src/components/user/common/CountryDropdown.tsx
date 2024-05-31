import { useState } from 'react';
import CountryFlag from './CountryFlag';
import { FaChevronDown } from 'react-icons/fa';
import constants from '../../../constants';



const CountryDropdown = () => {
    const countries = constants.countries;
  const [selectedCountry, setSelectedCountry] = useState(countries[1]);
  const [hidden, setHidden] = useState(true);

  const handleSelect = (country: any) => {
    setSelectedCountry(country);
    setHidden(true)
  };

  return (
    <div className="relative inline-block w-16">
      <div className="flex items-center justify-between p-2 bg-transparent rounded cursor-pointer" onClick={()=>setHidden(!hidden)}>
        <CountryFlag countryCode={selectedCountry} className="w-8 h-8" />
        <FaChevronDown className='ml-1' />
      </div>
      {!hidden && <ul className="absolute left-0 z-10 w-full mt-1 overflow-hidden bg-transparent rounded shadow-lg">
        {countries.map((country) => (
          <li
            key={country}
            className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
            onClick={() => handleSelect(country)}
          >
            <CountryFlag countryCode={country} className="w-8 h-8" />
          </li>
        ))}
      </ul>}
    </div>
  );
};

export default CountryDropdown;
