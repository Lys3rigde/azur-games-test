import logo from './logo.png'; //я не нашел svg, простите
import ghLogo from './github.svg';
import styles from './Header.module.css';
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/"><img src={logo} alt="Azur Games: Logotype" className={styles.logo} /></Link>
      <a href="https://github.com/Lys3rigde" target="_blank" rel="noopener noreferrer" className={styles.ghWrapper}>
        <img src={ghLogo} alt="Github Profile Link" className={styles.github} />
      </a>
    </div>
  )
}