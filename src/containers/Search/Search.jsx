import React from 'react';


function Search( { handleInput, search }) { //instead of props, we are adding curly braces to either side of this will be destructuring the parameter which is pulled through, so we are diving deeper through it. 
    return (
        <section className="searchBox-wrap">
            <input 
            type="text" 
            placeholder="Search for a movie..." 
            className="searchBox" 
            onChange={handleInput} 
            onKeyPress={search}

            />


        </section>
    )
}

export default Search