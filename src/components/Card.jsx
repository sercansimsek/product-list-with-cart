import waffleImg from "../assets/images/image-waffle-mobile.jpg";
import waffleImgTablet from "../assets/images/image-waffle-tablet.jpg";
import cartImg from "../assets/images/icon-add-to-cart.svg";
import incrementIcon from "../assets/images/icon-increment-quantity.svg";
import decrementIcon from "../assets/images/icon-decrement-quantity.svg";

export const Card = ({ data }) => {
  return (
    <>
      <div className="w-[327px] h-[319px] md:w-[213px] font-redHat">
        <div className="flex flex-col justify-center items-center">
          <picture>
            <source media="(min-width:1024px)" srcSet={data.image.desktop} />
            <source media="(min-width:768px)" srcSet={data.image.tablet} />
            <img
              src={waffleImg}
              alt={data.name}
              className="h-[212px] md:h-[212px] rounded-md"
            />
          </picture>

          <div className="flex items-center justify-center gap-3 bg-[#fff] text-black border border-rose400 p-3 w-[160px] rounded-3xl -m-[25px] cursor-pointer hover:text-red hover:border-red">
            <img src={cartImg} alt="cart" />
            <span className="text-sm font-semibold">Add to Cart</span>
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

      {/* <div className="w-[327px] h-[319px] font-redHat">
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
