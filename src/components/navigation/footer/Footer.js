import React from 'react';
import fbLogo from '../../../assets/images/flogo-HexRBG-Wht-58.png';
import gitLogo from '../../../assets/images/GitHub-Mark-Light-64px.png';
import linkedInLogo from '../../../assets/images/In-White-54px-TM.png';

const footer = () => {
    return (
        <footer className="footer">
            <div id="social-links">
                <p><a href="https://www.facebook.com/harry.saito"><img src={fbLogo} alt="facebook" /></a><a href="https://github.com/hhsaito"><img src={gitLogo} alt="Github" /></a><a href="https://www.linkedin.com/in/harrysaito/"><img src={linkedInLogo} alt="LinkedIn" /></a></p>
                <p>&copy;2019 Harry Saito</p>
            </div>
        </footer>
    );
};

export default footer;