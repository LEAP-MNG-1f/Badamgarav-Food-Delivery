"use client";

import { menuFoods } from "@/app/_components/types/types";
import MenuMorning from "../app/_components/menu/MenuMorning";

import { Footer } from "../app/_components/ui/Footer";
import Header from "../app/_components/ui/Header";

export default function MenuPage() {
  return (
    <>
      <Header />
      <MenuMorning meFoods={menuFoods} />
      <Footer />
    </>
  );
}
