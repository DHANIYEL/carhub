"use client";

import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";
const SearchBar = () => {
  const [model, setModel] = useState("");
  const router = useRouter();
  const [manufacturer, setManufacturer] = useState("");
  // console.log(setManufacturer);
  const SearchButton = ({ otherclasses }: { otherclasses: string }) => (
    <button type="submit" className={`-ml-3 z-10 ${otherclasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying-glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === "" && model === "") {
      return alert("Please fill in the search bar !!");
    } else {
      updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
    }
  };
  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname);
  };
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherclasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          alt="model car logo"
          className="ml-4 w-5 h-5 absolute"
        />
        <input
          placeholder="Vitrus"
          type="text"
          value={model}
          name="model"
          className="searchbar__input"
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton otherclasses="sm:hidden" />
      </div>
      <SearchButton otherclasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
