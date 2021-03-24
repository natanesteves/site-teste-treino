import Image from "next/image";
import { Waves } from "../../components";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div>
        <h1>your landing page</h1>
      
        <button className={styles.buttonSecondary} type="button">
        contact us
        </button>
      </div>
     
      <Waves />
    </section>
  );
}
