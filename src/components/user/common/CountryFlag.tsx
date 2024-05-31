import Flag from 'react-world-flags';

const CountryFlag = ({ countryCode, className } : {countryCode: string, className?: string}) => {
  return <Flag code={countryCode} className={`h-5 w-10 ${className}`} />;
};

export default CountryFlag;
