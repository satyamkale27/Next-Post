"use server";
export default async function page() {
  try {
    const response = await fetch("https://dummyjson.com/test");

    if (!response.ok) {
      throw new Error("Invalid URL");
    }

    const data = await response.json();
    return (
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    return <div>{error.message}</div>;
  }
}
