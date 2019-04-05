import React from 'react';

const breadcrumbs = ( props ) => (
    <nav aria-label="Breadcrumb" className="breadcrumb">
        <ol className="container">
            <li><a href="/">Home</a></li>
            <li><a href="/portfolio/index.html">Portfolio</a></li>
            <li><a href="/portfolio/whoozreact/index.html" aria-current="page">React Modal Example</a></li>
        </ol>
    </nav>
);

export default breadcrumbs;