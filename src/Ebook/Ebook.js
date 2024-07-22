
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Ebook.css';

const Ebook = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Example API URL, replace it with your actual API endpoint
    const apiUrl = 'https://api.example.com/data';

    // Using Axios to make a GET request
    axios.get(apiUrl)
      .then(response => {
        // Handle the successful response
        setData(response.data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className='const'>
      <header>
      <nav class="navbarbackground">
                <ul class="nav-list">
                    <div class="logo">
                        <img src="https://www.ealixir.com/wp-content/themes/ealixir-2019/assets/press_release_logo/debate.png"/>
                    </div>
                    <li>
                        <a href="#courses">Home</a>
                    </li>
                    
                   
                </ul>
 
                <div class="rightNav">
                    <input
                        type="text"
                        placeholder="Find your topic"
                        name="search"
                        id="search"
                    />
                    <button class="btn btn-sm">
                        Search
                    </button>
                </div>
            </nav>
      </header>

      <div style={{ columnCount: '2' }}>
      <h1 style={{fontSize:'400%',marginLeft:'20px'}} >The Fundamentals of Debating: A Beginner's Guide</h1>
        <p style={{color:'black',marginLeft:'20px'}}>Step into the captivating world of debating with 'The Fundamentals of Debating: A Beginner's Guide,' an interactive children's eBook designed for 8-11 year olds. Your mentors Jude and Huda will take you through the fundamental building blocks of debating, including learning activities and debating resources for critical thinking, constructing arguments, speaking persuasively, and engaging respectfully with others' ideas.

The children's eBook features a variety of learning at home resources, including videos, audio, text boxes, drop-downs, and fill-in-the-blanks, creating a dynamic learning experience that will keep children engaged throughout. With 100 pages split across 2 eBooks, each containing 6 manageable steps, this self-paced debating adventure guarantees 6+ hours of learning at home excitement and entertainment! 

This learning eBook works best on Adobe Acrobat Reader - click here for instructions.
</p>

        
       

        <iframe width="560" height="500" src="https://www.youtube.com/embed/1TSkkxu8on0?si=jdDhDW6uS5NDso0a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{ borderRadius: '30px', marginTop: '50px', marginLeft: '100px' }}></iframe>
      </div>

      <footer className='foot'>Debate Now</footer>
    </div>
  );
};

export default Ebook;
