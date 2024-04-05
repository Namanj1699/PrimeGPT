import React from "react";

const GPTSearchbar = () => {
  return (
    <div>
      <div>
      <input
        className="border-[1px] border-black p-4 w-9/12 ml-[175px] my-12 rounded-lg cursor-text bg-slate-700 text-white font-semibold"
        type="text"
        // value={searchText}
        placeholder="Search"
        // onChange={(e) => {
        //   setSearchText(e.target.value);
        //   const Flist = listofRestaurants.filter((rest) => {
        //     return rest.info.name
        //       .toLowerCase().includes(searchText.toLowerCase());
        //   });
        //   setFilteredRestaurants(Flist);
        // }}
      />
      </div>
    </div>
  );
};

export default GPTSearchbar;
