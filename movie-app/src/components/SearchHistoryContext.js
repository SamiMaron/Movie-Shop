import React, { createContext, useState } from 'react';



// Creates and exports SearchHistoryContext and SearchHistoryProvider component.
// SearchHistoryProvider uses a state var (searchHistory) to keep track of search terms that have been used
// Also provides functions to manage search history
// The context is provied to the children components using the SearchHistoryContext.Provider



export const SearchHistoryContext = createContext();

export const SearchHistoryProvider = ({children}) => {
    const [searchHistory, setSearchHistory] = useState([]);

    const addToHistory = (searchTerm) => {
        setSearchHistory([...searchHistory, searchTerm]);
    };

    const removeFromHistory = (searchTerm) => {
        setSearchHistory(searchHistory.filter(term => term !== searchTerm));
    };

    const clearHistory = () => {
        setSearchHistory([]);
    };

    return (
        <SearchHistoryContext.Provider value={{searchHistory, addToHistory, removeFromHistory, clearHistory}}>
            {children}
        </SearchHistoryContext.Provider>
    );
};






