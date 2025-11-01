import waffleImg from "../assets/images/image-waffle-mobile.jpg";
import waffleImgTablet from "../assets/images/image-waffle-tablet.jpg";
import cartImg from "../assets/images/icon-add-to-cart.svg";
import incrementIcon from "../assets/images/icon-increment-quantity.svg";
import decrementIcon from "../assets/images/icon-decrement-quantity.svg";
import { useState } from "react";
import cn from "classnames";

export const Card = ({ data }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [productCount, setProductCount] = useState(1);

  const { image } = data
  const incrementCount = () => {
    setProductCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    setProductCount((prev) => prev - 1);

    if (productCount <= 1) {
      setIsAdded(false);
      setProductCount(1);
    }
  };
  return (
    <>
      <div className="w-[327px] h-[319px] md:w-[213px] lg:w-[250px] ont-redHat">
        <div className="flex flex-col justify-center items-center">
          <div className="relative">
            <picture>
              <source media="(min-width:1024px)" srcSet={data.image.desktop} />
              <source media="(min-width:768px)" srcSet={data.image.tablet} />
              <img
                src={image.mobile}
                alt={data.name}
                className={cn("h-[212px] rounded-md", {
                  "border-2 border-red": isAdded,
                })}
              />
            </picture>

            {!isAdded && (
              <button
                type="button"
                className={
                  "absolute left-1/2 transform -translate-x-1/2 -bottom-[25px] z-10 flex items-center justify-center gap-3 bg-white text-black border border-rose400 p-3 w-[160px] rounded-3xl cursor-pointer hover:text-red hover:border-red"
                }
                onClick={() => setIsAdded(true)}
              >
                <img src={cartImg} alt="cart" />
                <span className="text-sm font-semibold">Add to Cart</span>
              </button>
            )}

            {isAdded && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 -bottom-[25px] z-10 flex justify-between items-center bg-red text-white border border-rose400 p-3 w-[160px] rounded-3xl"
              >
                <button
                  type="button"
                  className="flex items-center justify-center w-5 h-5 border-2 rounded-full cursor-pointer hover:bg-white hover:bg-[url('src/assets/images/decrement-red.svg')]"
                  onClick={decrementCount}
                >
                  <img src={decrementIcon} alt="decrement icon" />
                </button>
                <span className="font-semibold text-sm w-8 text-center">
                  {productCount}
                </span>
                <button
                  type="button"
                  className="flex items-center justify-center w-5 h-5 border-2 rounded-full cursor-pointer hover:bg-white hover:bg-[url('src/assets/images/increment-red.svg')]"
                  onClick={incrementCount}
                >
                  <img src={incrementIcon} alt="increment icon" />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-[41px]">
          <span className="font-thin text-rose500 text-sm">
            {data.category}
          </span>
          <span className="font-semibold text-rose900 text-md">
            {data.name}
          </span>
          <span className="text-red text-md font-semibold">{`$${data.price.toFixed(
            2
          )}`}</span>
        </div>
      </div>

      {/*  <div className="w-[327px] h-[319px] font-redHat">
        <div className="flex flex-col justify-center items-center ">
          <img
            src={waffleImg}
            alt="waffle"
            className="h-[212px] rounded-md border-2 border-red"
          />
          <div className="flex justify-between items-center bg-red text-[#fff] border border-rose400 p-3 w-[160px] rounded-3xl -m-[25px]">
            <button
              type="button"
              className="flex items-center justify-center w-5 h-5 border-2 rounded-full cursor-pointer"
            >
              <img src={decrementIcon} alt="decrement icon" />
            </button>
            <span className="font-semibold text-sm">4</span>
            <button
              type="button"
              className="flex items-center justify-center w-5 h-5 border-2 rounded-full cursor-pointer"
            >
              <img src={incrementIcon} alt="increment icon" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-[41px]">
          <span className="font-thin text-rose500 text-sm">Waffle</span>
          <span className="font-semibold text-rose900 text-md">
            Waffle with Berries
          </span>
          <span className="text-red text-md font-semibold">$6.50</span>
        </div>
      </div> */}
    </>
  );
};
