import { useState } from 'react';
import CountriesTable from '../../components/CountriesTable/CountriesTable';
import Layout from '../../components/Layout/Layout'
import SearchInput from '../../components/SearchInput/SearchInput';


export default function Home(countries) {
  // console.log(countries);

  const [keyword, setKeyword] = useState("");
  const filteredCountries = countries.countries.filter((country) => country.name.common.toLowerCase().includes(keyword) || country.region.toLowerCase().includes(keyword)); 

  const onInputChange  = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  }
  return (
    <Layout>
      <div className='styles.counts'> Found {countries.countries.length} countries </div>

      <SearchInput  placeholder="Filter by name or Region"  onChange = {onInputChange} />
      <CountriesTable  countries= {filteredCountries} />
    </Layout>
  );
}


export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();
  return {
    props: {
      countries,
    }
  }
}
