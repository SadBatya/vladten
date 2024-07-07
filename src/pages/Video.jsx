import Player from "../components/Player";
import { dataVideoArr } from "../data/data-video";
import styles from './Video.module.scss'
export default function Video() {
  return (
    <div className={styles.container}>
      {dataVideoArr.map((data, index) => (
        <Player name={data.name} href={data.href} key={index}/>
      ))}
      
    </div>
  );
}
