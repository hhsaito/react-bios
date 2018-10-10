import React from 'react';
import BioArticle from './BioArticle';
import './ext/crap.css';
import './BioList.css';

const BioList = ({ bios }) => {
    const biosArray = bios.map((user, i) => {
        return <BioArticle 
            key={i} 
            id={bios[i].id} 
            name={bios[i].name} 
            title={bios[i].title}
        />
    })
    return (
        <div className='photo-grid contain-1120'>
            <div className="gutter-sizer"></div>
            {biosArray}
        </div>
    );
}

export default BioList;