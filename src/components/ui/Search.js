import React, { useState } from "react";

const Search = ({getQuery}) => {
    const [text, setText] = useState("")


    const onChange = (q)=> {
        setText(q)
        getQuery(q)
    }

  return (
    <div>
      <section className="search">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search characters..."
            value={text}
            onChange={(e)=> onChange(e.target.value)}
            autoFocus
          />
        </form>
      </section>
    </div>
  );
};

export default Search;
