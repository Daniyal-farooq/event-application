import styles from '../../styles/Footer.module.css';
import Router from 'next/router';


function footer() {
  const homehandler = ()=>{
    Router.push('/')
  }
  const Eventshandler = ()=>{
    Router.push('/publicevents')
  }
  const Signuphandler = ()=>{
    Router.push('/signup')
  }
  const Loginhandler = ()=>{
    Router.push('/login')
  }
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2023 Globe Event Management Company</p>
        <ul className={styles.links}>
          <li><h5 className={styles.footerlinks} onClick={homehandler}>Home</h5></li>
          <li><h5 className={styles.footerlinks} onClick={Eventshandler}>Events</h5></li>
          <li><h5 className={styles.footerlinks} onClick={Signuphandler}>Signup</h5></li>
          <li><h5 className={styles.footerlinks} onClick={Loginhandler}>Login</h5></li>
        </ul>
      </div>
    </footer>
  );
}

export default footer;