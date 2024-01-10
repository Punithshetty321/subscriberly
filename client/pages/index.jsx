// pages/index.js
import React from 'react';
import styles from '../styles/styles.module.css';
import { Router, useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
    const navigateToRegister = () =>{
        router.push('/auth/register');
    };
  return (
    <div>
        
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>Your Logo</div>
          <div className={styles.navLinks}>
            <a href="/">Home</a>
            <a href="/categories">Categories</a>
            <div className={styles.dropdown}>
              <label htmlFor="sort-by">Sort By:</label>
              <select id="sort-by">
                <option value="latest">Latest</option>
                <option value="popular">Popular</option>
              </select>
            </div>
          </div>
          <div className={styles.authButtons}>
            <button onClick={navigateToRegister}>Login</button>
            <button>Register</button>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        {/* Your page content goes here */}
        <h1>Welcome to Your Website</h1>
        {/* Add more content as needed */}
      </main>
    </div>
  );
};

export default Home;