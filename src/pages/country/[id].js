

import Layout from "../../../components/Layout/Layout";
import styles from './Country.module.css';

const Country = ({country}) => {

  console.log(country);


  return  (
    <Layout>
      <div>
        <div className={styles.overview_pannel}>
          <img src={country.flags} alt={country.name}></img>
        </div>
      </div>
    </Layout>
  );
};

export default Country;


export const getServerSideProps = async  ({ params }) => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${params.id}`);

  const country = await res.json();

  return {
    props: {
      country,
    },
  };
};