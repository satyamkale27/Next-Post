"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const serachParam = useSearchParams();
  const serach = serachParam.get("search");
  return <div>{serach}</div>;
};
// http://localhost:3000/search?search=yourSearchValue example

export default Page;
