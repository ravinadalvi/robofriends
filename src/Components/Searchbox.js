import React from 'react';

const Searchbox = ({ searchfield, searchChange}) => {
    return(
        <div>
            <input 
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search robos' 
            onChange={searchChange}
            />
        </div>
    );
}

export default Searchbox;