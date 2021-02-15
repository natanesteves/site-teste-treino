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
            <h5>Sobre nós</h5>
            <p>Fazendo um som de <br/> qualidade para os ouvintes .</p>
          </div>
          <div>
            <h5>Contato</h5>
            <ul>
              <li>hello@fake.ie</li>
              <li>+55 14370914</li>
            </ul>
          </div>
          <address>
            <h5>Endereço</h5>
            <ul>
              <li>8-9 Marino Mart</li>
              <li>Fairview</li>
              <li>Dublin 3</li>
              <li>D03 P590</li>
            </ul>
          </address>
          <div>
            <h5>Outros Links</h5>
            <ul>
              <li>Politica de privacidade</li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
