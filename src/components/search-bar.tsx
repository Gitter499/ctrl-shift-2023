"use client";

import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

const SearchBar = (props: Props) => {
  const [text, setText] = useState("");
  const router = useRouter();

  return (
    <>
      <div className="search-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            console.log(text);

            router.push(`/profile/${text}`);
          }}
        >
          <input
            className="search"
            id="search"
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
            placeholder="Search profiles"
          />
        </form>
      </div>
    </>
  );
};

export default SearchBar;
