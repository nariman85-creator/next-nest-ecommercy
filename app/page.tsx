import { Main } from "@/components/Main/Main";
import Cardprops from "@/types/cardtypes";
import React from "react";
export const metadata = {
  title:"Shop"
}
const fetchData = async (): Promise<Cardprops[]> => {
  const data = await fetch(
    "http://localhost:3000/api/product",
    { cache: "no-store" }
  );
  const cards:Promise<Cardprops[]> = await data.json();

  return cards;
};

export default async function Home() {
  const cards:Cardprops[] = await fetchData();

  return (
    <>
      <Main cards={cards} />
    </>
  );
};