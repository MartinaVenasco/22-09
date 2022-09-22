import { useSelector, useDispatch } from "react-redux";

import styles from './index.module.scss';

const Planet = ({ planetData, img }) => {
  const dispatch = useDispatch();
  const { name, residents, population } = planetData;
 

  const onHandleModal = () => {
    dispatch({ type: 'SET_MODAL_VISIBLE' });
    dispatch({ type: 'SET_MODAL_DATA', payload: planetData });
  }

  return (
    <div className={styles.Planet} onClick={onHandleModal}>
      <h3>{name}</h3>
      <p className={styles.population}>{population}</p>
   <img src={img} alt="img"></img>
      
    </div>
  )
}

export default Planet