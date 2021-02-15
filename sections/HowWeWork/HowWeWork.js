import Image from "next/image";
import styles from "./HowWeWork.module.css";

export default function HowWeWork() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h3>Minhas Areas de atuação</h3>
        <p>
         
        </p>
      </div>
      <div className={styles.grid}>
        <div className={styles.cardContainer}>
          <Image
            src="/images/card2.png"
            alt={`card icon for second card`}
            className={styles.cardIcon}
            height={158}
            width={181}
          />
          <h4>Musica</h4>
          <div className={styles.card}>
            Texto falso Texto falso Texto falso Texto falso Texto falso Texto falso Texto falso 
            Texto falso Texto falso Texto falsoTexto falso
          </div>
        </div>
        <div className={styles.cardContainer}>
          <Image
            src="/images/card2.png"
            alt={`card icon for second card`}
            className={styles.cardIcon}
            height={158}
            width={181}
          />
          <h4>Jingle</h4>
          <div className={styles.card}>
          Texto falso Texto falso Texto falso Texto falso Texto falso Texto falso Texto falso 
            Texto falso Texto falso Texto falsoTexto falso
          </div>
        </div>
        <div className={styles.cardContainer}>
          <Image
            src="/images/card2.png"
            alt={`card icon for second card`}
            className={styles.cardIcon}
            height={158}
            width={181}
          />
          <h4>Shows</h4>
          <div className={styles.card}>
          Texto falso Texto falso Texto falso Texto falso Texto falso Texto falso Texto falso 
            Texto falso Texto falso Texto falsoTexto falso
          </div>
        </div>
        <div className={styles.cardContainer}>
          <Image
            src="/images/card2.png"
            alt={`card icon for second card`}
            className={styles.cardIcon}
            height={158}
            width={181}
          />
          <h4>Trilha Sonora</h4>
          <div className={styles.card}>
          Texto falso Texto falso Texto falso Texto falso Texto falso Texto falso Texto falso 
            Texto falso Texto falso Texto falsoTexto falso
          </div>
        </div>
      </div>
    </section>
  );
}
