"use client"; // This marks the component as a client component
import React from "react";

const Clientinfo = ({ data }) => {
  return (
    <div className="flex justify-center mt-3">
      <h1>Fetched Data</h1>
      <h2>{JSON.stringify(data)}</h2> {/* Display the fetched data */}
    </div>
  );
};

export default Clientinfo;
