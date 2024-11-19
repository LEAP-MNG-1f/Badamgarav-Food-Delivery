"use client";

import FastDelivery from "../homepage/FastDelivery";
import { Footer } from "../homepage/Footer";
import Header from "../homepage/Header";
import Hero from "../homepage/Hero";
import ActionMealCard from "../homepage/Meals";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <FastDelivery />
      <ActionMealCard />
      <Footer />
    </>
  );
}
