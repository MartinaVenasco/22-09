import { GET, GET2 } from '../utils/api';
import { useState, useEffect } from 'react';
import Planet from '../Planet';
import styles from './index.module.scss';


const PlanetList = () => {
  const [planets, setPlanets] = useState([]);
const [pictures, setPictures] = useState()

  useEffect(() => {
    GET('planets').then(data => setPlanets(data.results.filter(el => el.diameter <= 10300))).then(console.log(planets))
  }, []);
  
  useEffect(() => {
    GET2().then(data => setPictures(data.url)).then(console.log(pictures))
  }, []);

  return (
    <div className={styles.PlanetList}>
      { planets && planets.map(planetData => <Planet planetData={planetData} key={planetData.diameter} img={pictures}/>)}

    </div>
  )
}

export default PlanetList