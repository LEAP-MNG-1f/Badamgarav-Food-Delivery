"use client";

import FastDelivery from "../homepage/FastDelivery";
import { CardListProps, FoodHomePage } from "../homepage/Foods";
import { Footer } from "../homepage/Footer";
import Header from "../homepage/Header";
import Hero from "../homepage/Hero";
import { MealCategory, MealCategoryProps } from "../homepage/MealCategory";
import ActionMealCard, { foods } from "../homepage/Meals";

export default function HomePage({ foods }: CardListProps) {
  return (
    <>
      <Header />
      <Hero />
      <FastDelivery />
      {/* <FoodHomePage foods={foods} /> */}
      <ActionMealCard />
      <Footer />
    </>
  );
}
