import Image from "next/image";
import { Waves } from "../../components";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div>
        <h1>Marque um Show</h1>
      
        <button className={styles.buttonSecondary} type="button">
          Fale conosco
        </button>
      </div>
     
      <Waves />
    </section>
  );
}
