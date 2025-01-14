import React from "react";
import { use } from "react";
import Clientinfo from "./Clientcomp";

async function getdata() {
  const response = await fetch("https://dummyjson.com/test");
  return response.json(); // Parse the JSON response
}

const Infoservercom = () => {
  const data = use(getdata()); // Fetch data on the server
  // Pass the data to the client component
  return (
    <div>
      <h1 className="text-center text-red-500">
        data recived from server component using use hook
      </h1>
      <Clientinfo data={data} />
    </div>
  );
};

export default Infoservercom;
