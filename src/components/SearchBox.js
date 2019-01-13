import React from 'react';

const SearchBox = ( { searchfield, searchChange } ) => {
    return (
        <div className="section-top contain-1120">
            <p className="subhead">Get to know your talented and experienced co-workers</p>
            <p>We are a team of journos, paparazzi, social stalkers, artistes, hackers, computer geeks, bossypants, number crunchers and one giant squirrel. We work and play hard at telling our stories across all communication platforms to achieve world domination--or at the very least--to elevate our global reputation.</p>
            <p>
                <input 
                    className='quicksearch'
                    type='text' 
                    placeholder='Search'
                    onChange={searchChange}
                />
            </p>
            <div aria-live="polite" id="bio-info" role="status" aria-relevant="additions removals"></div>
        </div>
    );
};

export default SearchBox;