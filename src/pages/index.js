import CountriesTable from '../../components/CountriesTable/CountriesTable';
import Layout from '../../components/Layout/Layout'
import SearchInput from '../../components/SearchInput/SearchInput';


export default function Home(countries) {


  console.log(countries);
  
  return (
    <Layout>
      <div className='styles.counts'> Found {countries.countries.length} countries </div>

      <SearchInput  placeholder="Filter by name, Region or SubRegion"/>
      <CountriesTable  countries={countries} />
    </Layout>
  );
}


export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();
  console.log(countries);
  return {
    props: {
      countries,
    }
  }
}
