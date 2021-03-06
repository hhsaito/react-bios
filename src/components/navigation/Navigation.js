import React from 'react';

const navigation = ( props ) => (
    <header className="header">
      <div className="header-inner">
         <h1 className="header-primary"><a href="/">
            <span className="header-primary--main">Harry Saito </span>
            <span className="header-primary--sub">Web Developer</span>
         </a></h1>
          <nav>
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/resume.html">Resume</a></li>
                  <li className="active"><a href="/portfolio/index.html">Portfolio</a></li>
              </ul>
          </nav>
      </div>
  </header>
);

export default navigation;