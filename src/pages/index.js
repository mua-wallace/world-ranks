import Layout from '../../components/Layout/Layout'


export default function Home(countries) {


  console.log(countries);
  
  return (
    <Layout>
      <div className='styles.counts'> Found {countries.countries.length} countries </div>

      {/* <SearchInput /> */}
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
