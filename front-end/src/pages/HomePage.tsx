"use client";

import FastDelivery from "../app/_components/homepage/FastDelivery";
import { MorningFoodsPage } from "../app/_components/homepage/foods/MorningFoods";

import { Footer } from "../app/_components/ui/Footer";
import Header from "../app/_components/ui/Header";
import Hero from "../app/_components/homepage/Hero";
import {
  desserts,
  mainFoods,
  morningFoods,
  salads,
} from "../app/_components/types/types";
import { MainFoodsPage } from "../app/_components/homepage/foods/MainFoods";
import { SaladsPage } from "../app/_components/homepage/foods/Salads";
import { DessertPage } from "../app/_components/homepage/foods/Dessert";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <FastDelivery />
      <MorningFoodsPage foods={morningFoods} />
      <MainFoodsPage foods={mainFoods} />
      <SaladsPage foods={salads} />
      <DessertPage foods={desserts} />
      <Footer />
    </>
  );
}
