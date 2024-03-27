import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar";
import { Contact } from "./components/Contact/Contact";

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Contact />
    </div>
  )
}

export default App
