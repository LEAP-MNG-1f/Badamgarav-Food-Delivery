"use client";

// import { API_URL } from "@/constant/constant";
// import { useEffect } from "react";

import { Cards } from "./_components/Card";
import { Header } from "./_components/Header";

export default function Home() {
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(`${API_URL}`);
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const str: string = "Hello";
  const number: number = 1000;
  const bool: boolean = true;

  return (
    <>
      <Header />
      {/* <Cards img="Zurag" title="Burger1" price={5500} discount={20} />
      <Cards img="Zurag" title="Burger2" price={5500} /> */}
    </>
  );
}
