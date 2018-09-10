import React from 'react';
import Header from './Header';

const AboutPage = () => (
      <div>
        <div className = "container">
          <p>This website allows for easy browsing of products from multiple websites in the GTA. The information comes from my Javascript webscraper which can be found on my github account <a href = "https://github.com/sonamdo/web-scraper-nosql">here</a></p>
          <p>The website was made with React and Redux and is hosted on Amazons EC2 virtual server, part of AWS</p>
          <p>At the moment the site shows bikes but will be set up for skis soon</p>
          <p>Stores Scanned: </p>
          <ul>
            <li>Sporting Life</li>
            <li>Gears</li>
            <li>Broadway</li>
            <li>Bikezone</li>
          </ul>
        </div>
      </div>
)

export default AboutPage;
