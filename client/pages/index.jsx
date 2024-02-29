import React from 'react';
import styles from '../styles/styles.module.css';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />

      <main className={styles.main}>
        {/* Your page content goes here */}
        <h1>Welcome to Your Website</h1>
        {/* Add more content as needed */}
      </main>
    </div>
  );
};

export default Home;
