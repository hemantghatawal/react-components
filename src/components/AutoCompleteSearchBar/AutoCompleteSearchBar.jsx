import { useEffect, useState } from "react";
import "./AutoCompleteSearchBar.styles.css";

export default function AutoCompleteSearchBar() {
  const [searchData, setSearchData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [show, setShow] = useState(false);

  const [cache, setCache] = useState({});

  const fetchData = async () => {
    try {
      if (cache[searchQuery]) {
        console.log("Data from cache from => ", searchQuery);
        setSearchData(cache[searchQuery]);
        return;
      }
      console.log("API CALLing for => ", searchQuery);
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${searchQuery}`,
      );
      const data = await response.json();
      setSearchData(data.products);
      setCache((prevCache) => ({ ...prevCache, [searchQuery]: data.products }));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const highlightMatch = (text, query) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <strong key={index}>{part}</strong>
      ) : (
        part
      ),
    );
  };
  return (
    <div className="App">
      <h1>Autocomplete Search bar</h1>
      <div>
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log("Enter Dabaya Gaya");
            }
          }}
          onFocus={() => setShow(true)}
          onBlur={() => setTimeout(() => setShow(false), 150)}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={show}
          aria-controls="suggestions-list"
        />
        {show && (
          <div
            id="suggestions-list"
            className="suggestions-container"
            role="listbox"
          >
            {searchData.map((data) => (
              <div
                id={`option-${data.id}`}
                key={data.id}
                className="search-suggestions"
                role="option"
                aria-selected={false}
              >
                <span>{highlightMatch(data.title, searchQuery)}</span>
                <img height={20} width={20} src={data.thumbnail} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
