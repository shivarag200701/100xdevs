"use server";

export async function User() {
  new Promise((r) => setTimeout(r, 2000));
  return {
    name: "Shiva",
    email: "mikemax12",
  };
}
