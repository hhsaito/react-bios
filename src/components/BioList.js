import React from 'react';
import BioArticle from './BioArticle';
import './ext/external.css';
import './BioList.css';

const BioList = ({ bios, clickArticleLink }) => {
    const biosArray = bios.map((user, i) => {
        return <BioArticle 
            key={bios[i].id} 
            name={bios[i].name} 
            title={bios[i].title}
            clickArticleLink={() => clickArticleLink(i)}
        />
    })
    return (
        <div className='photo-grid contain-1120'>
            {biosArray}
        </div>
    );
}

export default BioList;