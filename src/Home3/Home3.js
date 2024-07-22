// HomePage.js

import React from 'react';
import './Home3.css';

const Home3 = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src="https://www.ealixir.com/wp-content/themes/ealixir-2019/assets/press_release_logo/debate.png" alt="DebateIsland Logo" style={{width:'300px',height:'50px'}}/>
          
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#topics">Topics</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero-section">
        <div className="hero-content">
          <h2>Engage. Discuss. Debate.</h2>
          <p>Join the platform where ideas collide. Explore diverse topics and contribute to meaningful conversations.</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image" >
          <img src="https://thumbs.dreamstime.com/b/debate-concept-wooden-cubes-flower-glasses-coins-magnifier-white-background-debate-concept-wooden-cubes-194786679.jpg" alt="DebateHub Hero" />
        </div>
      </section>
       <div style={{display:'flex',marginLeft:'200px'}}>

      <section className="main-section">
        <h2>Featured Topics</h2>
        <div className="topic-cards">
          <div className="topic-card">
            <img  src="https://elitebusinessmagazine.co.uk/wp-content/uploads/2023/05/Turning-value-into-actions-How-leaders-can-use-automation-and-AI-for-their-advantage-768x605.jpg" alt="Topic 1" />
            <h3>Is Artificial Intelligence a Threat?</h3>
            <p>Discuss the impact of AI on society and its ethical implications.</p>
          </div>
          {/* Add more topic cards */}
        </div>
      </section>

      <section className="popular-debates">
        <h2 >Popular Debates</h2>
        <div className="debate-list">
          <div className="debate-item">
          <img src="https://tse3.mm.bing.net/th?id=OIP.b-UdPzApJToHTrHRxnZ2nQHaEK&pid=Api&P=0&h=180" alt="Debate Image" />
            <h3>Should space exploration be a top priority?</h3>
            <p>Join the debate on the importance of space exploration for humanity's future.</p>
          </div>
          {/* Add more debate items */}
        </div>
      </section>

      <section className="latest-news">
        <h2>Latest News</h2>
        <div className="news-articles">
          <div className="news-article">
          <img src="https://tse1.mm.bing.net/th?id=OIP.P6_O6Lik5mqYDNmzT75ixQHaEK&pid=Api&P=0&h=180" alt="Debate Image" />
            <h3>New Discoveries in Renewable Energy</h3>
            <p>Explore the latest breakthroughs in renewable energy sources and their impact on the environment.</p>
          </div>
          {/* Add more news articles */}
        </div>
      </section>
      </div>

      <section className="join-community">
        <h2>Join the Community</h2>
        <p>Connect with like-minded individuals and participate in vibrant discussions. Sign up now to start engaging!</p>
        <button className="cta-button1">Join Now</button>
      </section>

      <footer className="footer">
        <p>&copy; 2020 DebateIsland. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home3;