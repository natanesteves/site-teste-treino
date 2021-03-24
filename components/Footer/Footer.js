import styles from "./Footer.module.css";

import { Container, Waves } from "../";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Container>
        <Waves flip image="/images/wave--infinite-grey.svg" />
        <div>
          
        </div>
        <div className={styles.grid}>
          <div>
            <h5>about Us</h5>
            <p>Text Text Text <br/> Text Text Text .</p>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>hello@fake.ie</li>
              <li>+55 14370914</li>
            </ul>
          </div>
          <address>
            <h5>address</h5>
            <ul>
              <li>8-9 Marino Mart</li>
              <li>Fairview</li>
              <li>Dublin 3</li>
              <li>D03 P590</li>
            </ul>
          </address>
          <div>
            <h5>Other Links</h5>
            <ul>
              <li>
Privacy Policy</li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
