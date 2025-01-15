"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const serachParam = useSearchParams();
  const serach = serachParam.get("search");
  return <div>{serach}</div>;
};

export default Page;
