"use client";

import FastDelivery from "../app/_components/homepage/FastDelivery";
import { FoodCardComponent } from "../app/_components/homepage/foods/MorningFoods";

import { Footer } from "../app/_components/ui/Footer";
import Header from "../app/_components/ui/Header";
import Hero from "../app/_components/homepage/Hero";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <FastDelivery />
      <FoodCardComponent />
      <Footer />
    </>
  );
}
