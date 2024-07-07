import styles from './Player.module.scss'
export default function Player({ href, name }) {
  return (
    <div className={styles.player}>
      <iframe
       className={styles.frame}
        height='215px'
        src={href}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title={name}
      ></iframe>
      <p className={styles.text}>{name}</p>
    </div>
  );
}
