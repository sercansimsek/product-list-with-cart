import removeItemIcon from "../assets/images/icon-remove-item.svg";
import carbonNeutral from "../assets/images/icon-carbon-neutral.svg";
import { useContext } from "react";
import { ProductCountContext } from "./ContextApi/ProductCountContext";

export const Cart = () => {
  const { productCount, setCount } = useContext(ProductCountContext);
  return (
    <div className="flex flex-col justify-center gap-6 w-[327px] md:w-[688px] lg:w-[384px] p-6 font-redHat">
      <span className="font-semibold text-2xl text-red">Your Cart ({productCount})</span>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 text-md">
          <span className="text-rose900 font-medium">Classic Tiramisu</span>
          <div className="flex gap-3">
            <span className="text-red font-semibold">1x</span>{" "}
            <span className="text-rose500 font-light">@ $5.50</span>{" "}
            <span className="text-rose500 font-semibold">$5.50</span>
          </div>
        </div>
        <button className="w-5 h-5 cursor-pointer">
          <img
            src={removeItemIcon}
            alt="remove item icon"
            className="border border-rose300 rounded-full p-1 hover:border-black"
          />
        </button>
      </div>
      <hr className="block h-[1px] border-0 bg-rose100" />
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center text-rose900">
          <span className="font-sm">Order Total</span>
          <span className="font-bold text-2xl">$46.50</span>
        </div>
        <div className="flex gap-2 bg-rose-50 p-3 rounded-md">
          <img src={carbonNeutral} alt="carbon neutral icon" />
          <span className="text-rose900 text-sm">
            This is a <strong className="font-semibold">carbon-neutral</strong> delivery
          </span>
        </div>

        <button className="bg-red p-3 rounded-3xl text-white cursor-pointer font-semibold">
          Confirm Order
        </button>
      </div>
    </div>
  );
};
