import React, { useEffect, useState } from 'react';
import styles from '../styles/styles.module.css';
import { Router, useRouter } from 'next/router';
import { useAuth } from './AuthContext';

const Home = () => {
  const router = useRouter();
  const{isLoggedIn, logout, navigateToAddProduct, navigateToLogin, navigateToRegister } = useAuth();

   
    const handleLogout = () => {
      logout();
      router.push('/auth/login');
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
            {isLoggedIn ?(
              <><button onClick={navigateToAddProduct}>AddProduct</button><button onClick={handleLogout}>Logout</button></>
              
            ):(
              <>
            
            <button onClick={navigateToRegister}>Register</button>
            <button onClick={navigateToLogin}>Login</button>
            </>
            )}
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