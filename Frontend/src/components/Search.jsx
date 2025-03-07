import { useState } from "react";
import "./Search.css";

function Search(props) {
  const [search, setSearch] = useState("");

  const onSearchChange = (value) => {
    setSearch(value);
    props.onSearchChange(value);
  };

  // const onSearchChange = () => {
  //   props.onSearchChange(search);
  // };

  // const searchKeydown = (e) => {
  //   if (e.key === "Enter") {
  //     onSearchChange();
  //   }
  // };

  return (
    <>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Masukan nama kost"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          // onKeyDown={searchKeydown}
        ></input>
        <button
          className="search-button"
          onClick={() => props.onSearchChange(search)}
        >
          Cari
        </button>
      </div>
      <small>
        Ditemukan {props.totalPosts} data dengan pencarian kata " {search} "
      </small>
    </>
  );
}

export default Search;
