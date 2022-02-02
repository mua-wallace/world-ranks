import styles from "./CountriesTable.module.css"
const CountriesTable = ({countries}) => {
  let countryNames = [];
  countries.countries.map((country) => {
    countryNames.push(country.name.common);
  });

  let countryPopulation = [];
  countries.countries.map((country) => {
    countryPopulation.push(country.population);
  });
  console.log(countryNames);
  console.log(countryPopulation);
  return (
    <div>
      <div className={styles.heading}>
        <button className={styles.heading_name}>
          <div>Name</div>
        </button>
        <button className={styles.heading_population}>
          <div>Population</div>
        </button>
      </div>
      {countryNames.map((name, index) => {
        return <p key={index}>{name}</p>
      })
      }
      {countryNames.map((pop, index) => {
        return <p key={index}>{pop}</p>
      })
      }
    </div>
  )
}

export default CountriesTable
