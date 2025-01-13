"use server";

export const serverAction = async () => {
  console.log("serverAction");
  // we can perform server related stuff like connecting to dbs and fetch and posting data
  return [{ id: 1 }, { id: 2 }];
};
