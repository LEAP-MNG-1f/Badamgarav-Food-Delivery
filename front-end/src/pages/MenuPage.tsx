"use client";

import MenuMorning from "../app/_components/menu/MenuMorning";
import { menuFoods } from "../app/_components/types/types";
import { Footer } from "../app/_components/ui/Footer";
import Header from "../app/_components/ui/Header";

export default function MenuPage() {
  return (
    <>
      <Header />
      <MenuMorning foods={menuFoods} />
      <Footer />
    </>
  );
}
