import React from 'react';

const BioArticle = ( props ) => {
    return (
        <article className='photo-box'>
            <a href="#modal-backdrop" onClick={props.clickArticleLink}><img src={`/images/bios/thumbnails/${props.name}-TH.jpg`} alt={props.name} /></a> 
            <h2>{props.name}</h2>
            <p>{props.title}</p>
        </article>
    );
}

export default BioArticle;