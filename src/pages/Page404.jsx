import React from "react";
import { Link } from "react-router-dom";
import styles from "./Page404.module.css";
import Container from "react-bootstrap/Container";

function Page404() {
  return (
    <div
      className={`${styles.page404} bg-primary text-white d-flex flex-column justify-content-center align-items-center`}
    >
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <p className="h4 text-center">
          Avem o stire nu tocmai grozava... pagina pe care ai incercat sa o
          accesezi nu (mai) exista.
        </p>
        <strong className={`${styles.error404}`}>404 :(</strong>
        <p className="h4 text-center">
          Hai inapoi pe site sa vezi o noua stire!
        </p>
      </Container>
    </div>
  );
}

export default Page404;
