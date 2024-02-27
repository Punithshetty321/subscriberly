import React, { useEffect, useState } from 'react';
import styles from '../styles/styles.module.css';
import { Router, useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const[isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  },[]);

    const navigateToRegister = () =>{
        router.push('/auth/register');
    };
    const navigateToLogin = () =>{
      router.push('/auth/login');
    };
    const navigateToAddProduct = () =>{
      router.push('/product/addproduct');
    };
    const handleLogout = () => {
      // Clear the token from local storage and redirect to the login page
      window.localStorage.removeItem('token');
      setIsLoggedIn(false);
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