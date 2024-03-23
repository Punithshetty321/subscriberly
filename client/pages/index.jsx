import React from 'react';
import styles from '../styles/styles.module.css';
import Navbar from '../components/navbar';
import ViewProducts from './product/viewproduct';

const Home = () => {
  return (
    <div>
      <Navbar />
      <ViewProducts />

      <main className={styles.main}>
        
      </main>
    </div>
  );
};

export default Home;
