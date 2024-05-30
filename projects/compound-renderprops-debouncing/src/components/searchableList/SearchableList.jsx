import { useRef, useState } from "react";

export const SearchableList = ({ items, itemKeyFn, children }) => {
  const timer = useRef();
  const [searchValue, setSearchValue] = useState("");

  const filteredItems = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleChange = (event) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      timer.current = null;
      setSearchValue(event.target.value);
    }, 1000);
  };

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {filteredItems.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
};
