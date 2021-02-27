import { useState } from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";

function App() {
  const [mode, setMode] = useState(false);

  return (
    <div
      className={`${styles.App} theme--${mode ? "light" : "dark"}`}
      onClick={() => setMode(!mode)}
    >
      <header className={styles["App-header"]}>
        <img src={logo} className={styles["App-logo"]} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles["App-link"]}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
