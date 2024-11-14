"use client";

import { API_URL } from "@/constant/constant";
import { useEffect } from "react";
import PrimarySearchAppBar from "./_components/Header";

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
    <div className="">
      <PrimarySearchAppBar />
    </div>
  );
}
