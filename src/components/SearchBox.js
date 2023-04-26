import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBox = () => {
    return (
        <>
            <div className='search'>
                <div className='search-container'>
                    <form action="#">
                        <div className='search-box'>
                            <input type='text' placeholder='Search..' />
                            <button type="submit"><FaSearch /></button>
                        </div>
                    </form>
                </div>

                <div className='searchBoxes a'>Anxiety</div>
                <div className='searchBoxes b'>Depression</div>
                <div className='searchBoxes c'>PTSD</div>
                <div className='searchBoxes d'>Addiction</div>
                <button className='searchBox-btn' type="text"><a href='/'>Show More</a></button>
            </div>
        </>
    )
}

export default SearchBox