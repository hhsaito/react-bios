import React from 'react';

const BioArticle = ({ name, title }) => {
    return (
        <article className='photo-box'>
            <a href="#modal-backdrop"><img src={`/images/bios/${name}.jpg`} alt={name} /></a>
            <h2>{name}</h2>
            <p>{title}</p>
        </article>
    );
}

export default BioArticle;