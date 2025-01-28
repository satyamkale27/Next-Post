async function fetchData() {
  const response = await fetch("https://dummyjson.com/test", {
    next: { revalidate: 360 }, // Revalidate every 360 seconds
  });
  const data = await response.json();
  return data;
}

export default async function Page() {
  const data = await fetchData();

  return <div>{JSON.stringify(data)}</div>;
}
