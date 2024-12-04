"use client";

import { OrderConfirmation } from "@/app/_components/order/Confirm";
import { Footer } from "@/app/_components/ui/Footer";

import Header from "@/app/_components/ui/Header";

export default function OrderConfirmationPage() {
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center items-center">
        <div className="container flex justify-between px-[80px] my-[120px]">
          <OrderConfirmation />
        </div>
      </div>
      <Footer />
    </div>
  );
}
