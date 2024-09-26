import React, { useState } from "react";

const Search = ({ searchCallback }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
        searchCallback(event.target.value);  // Perform search on each keystroke
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        searchCallback(searchQuery);
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input 
                type="text" 
                value={searchQuery} 
                onChange={handleInputChange} 
                className="search-input"
                placeholder="Search emails..."
            />
            <button type="submit" className="search-button" aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </button>
        </form>
    );
}

export default Search;