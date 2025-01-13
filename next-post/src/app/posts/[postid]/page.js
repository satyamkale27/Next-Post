"use client";
import React from "react";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const { postid } = useParams();
  return <div>{postid}</div>;
};

export default Page;
