"use client";

// import { API_URL } from "@/constant/constant";
// import { useEffect } from "react";

import { Cards } from "./_components/Card";
import { CardList } from "./_components/CardList";
import { Header } from "./_components/Header";
import HomePage from "./_components/pages/HomePage";

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

  return (
    <>
      <HomePage />
    </>
  );
}
