"use client";

// import { API_URL } from "@/constant/constant";
// import { useEffect } from "react";

import { Cards } from "./_components/Card";
import { CardList } from "./_components/CardList";

export default function LessonPage() {
  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const foodMockData: FoodType[] = [
    {
      _id: "1",
      name: "Tsuivan",
      image: "https:///aasdasdd",
      ingredient: "ahdkhlahsfgfsajfgsaf",
      price: 2000,
    },
    {
      _id: "2",
      name: "Buuz",
      image: "https:///aasdasdd",
      ingredient: "ahdkhlahsfgfsajfgsaf",
      price: 1000,
    },
  ];

  const array = [1, 2, 3, 4, 5];
  const array2 = ["1", "str"];

  const str: string = "Hello";
  const number: number = 1000;
  const bool: boolean = true;

  return (
    <>
      <Cards img="Zurag" title="Burger1" price={5500} discount={20} />
      <Cards img="Zurag" title="Burger2" price={5500} />
      <CardList foods={foodMockData} arrayNumber={array} arrayStr={array2} />
    </>
  );
}
