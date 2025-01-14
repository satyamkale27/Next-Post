//client way

// "use client";
// import React from "react";
// import { useParams } from "next/navigation";

// const Page = () => {
//   const { postid } = useParams();

//   console.log(postid,"postid")
//   return <div>{postid}</div>;
// };

// export default Page;

// server way to do same
import { serverAction } from "@/actions/example";
import React from "react";

export default async function Page({ params }) {
  const fetchData = await serverAction();
  // fetchData is fetched in server side
  const { postid } = await params;
  console.log(postid, "postid");
  return (
    <div>
      <div>postid={postid} </div>
      <div>
        {fetchData.map((d) => (
          <div key={d.id}>{d.id}</div>
        ))}
      </div>
    </div>
  );
}
