import React from 'react';
import Header from './Header';

const AboutPage = () => (
      <div>
        <div className = "container">
          <p>This website allows for easy browsing of products from multiple websites in the GTA. The information comes from my Javascript webscraper which can be found on my github account <a href = "https://github.com/sonamdo/web-scraper">here</a></p>
          <p>The website was made with React and Redux and is hosted on Amazons EC2 virtual server, part of AWS</p>
          <p>At the moment the site is still under construction and only contains placeholder info</p>
        </div>
      </div>
)

export default AboutPage;
