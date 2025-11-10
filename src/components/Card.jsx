import cartImg from "../assets/images/icon-add-to-cart.svg";
import incrementIcon from "../assets/images/icon-increment-quantity.svg";
import decrementIcon from "../assets/images/icon-decrement-quantity.svg";
import { useState, useEffect } from "react";
import cn from "classnames";

export const Card = ({ data, selectedItem, onHandleSelected }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [productCount, setProductCount] = useState(1);
  const { image } = data;

  const incrementCount = () => {
    const newCount = productCount + 1;
    setProductCount(newCount);
    if (isAdded) {
      onHandleSelected({
        ...data,
        quantity: newCount,
      });
    }
  };

  const decrementCount = () => {
    const newCount = productCount - 1;
    setProductCount(newCount);

    if (newCount === 0) {
      setIsAdded(false);
      onHandleSelected({ name: data.name, remove: true });
    } else {
      onHandleSelected({
        ...data,
        quantity: newCount,
      });
    }
  };
  return (
    <>
      <div className="flex flex-col gap-4 w-[327px] h-[319px] lg:h-[347px] md:w-[213px] lg:w-[250px] font-redHat ">
        <div className="flex flex-col justify-center items-center mb-[20px]">
          <div className="relative">
            <picture>
              <source media="(min-width:1024px)" srcSet={image.desktop} />
              <source media="(min-width:768px)" srcSet={image.tablet} />
              <img
                src={image.mobile}
                alt={data.name}
                className={cn("rounded-md", {
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
                onClick={() => {
                  setIsAdded(true);
                  onHandleSelected({
                    ...data,
                    quantity: productCount,
                  });
                }}
              >
                <img src={cartImg} alt="cart" />
                <span className="text-sm font-semibold">Add to Cart</span>
              </button>
            )}

            {isAdded && (
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-[25px] z-10 flex justify-between items-center bg-red text-white border border-rose400 p-3 w-[160px] rounded-3xl">
                <button
                  type="button"
                  className="flex items-center justify-center w-5 h-5 border-2 rounded-full cursor-pointer hover:bg-white hover:bg-[url('./assets/images/decrement-red.svg')] hover:bg-[length:16px_16px] hover:bg-center hover:bg-no-repeat"
                  onClick={decrementCount}
                >
                  <img src={decrementIcon} alt="decrement icon" />
                </button>
                <span className="font-semibold text-sm w-8 text-center">
                  {productCount}
                </span>
                <button
                  type="button"
                  className="flex items-center justify-center w-5 h-5 border-2 rounded-full cursor-pointer hover-bg-white hover:bg-[url('./assets/images/increment-red.svg')] hover:bg-[length:16px_16px] hover:bg-center hover:bg-no-repeat"
                  onClick={incrementCount}
                >
                  <img src={incrementIcon} alt="increment icon" />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-1">
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
    </>
  );
};
