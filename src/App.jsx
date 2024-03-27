import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Projects/Projects";
import { Experience } from "./components/Experience/Experience";

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
