import React, {useState} from 'react';

export default function Search({setShowSearch}) {
  const [searchStr, setSearchStr] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  let allElements = document.getElementsByTagName('*');

  const noResultStr = `
    Nothing found at your request.
    Try another value.
  `; 

  function doSearch(str) {
    const results = [];
    if (str.trim()) {
      for (let i = 0; i < allElements.length; i++) {
        const text = allElements.item(i).textContent; 
        const textLow = text.toLowerCase();
        if (textLow.includes(str)) results.push(text);
      }
    }
    setSearchResults(results);
  }

  return (
    <div className="search">
      <button className="form-close" onClick={() => setShowSearch(prev => !prev)}>
        ✖
      </button>
      <div className='header-search' >
        <input type="text" onChange={(ev) => {
          setSearchStr(ev.target.value);
          doSearch(ev.target.value.toLowerCase());
          }}
        />
        <button onClick={doSearch} />
      </div>
      <div className="search-results">
        {searchResults.length 
          ? `Found ${searchResults.length} elements with "${searchStr}"`
          : noResultStr}
      </div>
    </div>
  );
}
