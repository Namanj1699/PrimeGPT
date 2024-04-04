import React from "react";
import { Form } from "react-router-dom";

const GPTSearchbar = () => {
  return (
    <div>
      <Form>
      <input
        type="search"
        placeholder="Search"
        className="px-[450px] py-6 mt-12 mx-[180px] rounded-lg bg-gray-700"
      />
        </Form>  
      
    </div>
  );
};

export default GPTSearchbar;
