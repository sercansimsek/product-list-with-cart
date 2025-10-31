import waffleImg from "../assets/images/image-waffle-mobile.jpg";
import cartImg from "../assets/images/icon-add-to-cart.svg";
import incrementIcon from '../assets/images/icon-increment-quantity.svg';
import decrementIcon from '../assets/images/icon-decrement-quantity.svg';

export const Card = () => {
  return (
    <>
      <div className="w-[327px] h-[319px] font-redHat">
        <div className="flex flex-col justify-center items-center ">
          <img src={waffleImg} alt="waffle" className="h-[212px] rounded-md" />
          <div className="flex gap-3 bg-[#fff] text-black border border-rose400 p-3 w-[160px] rounded-3xl -m-[25px] cursor-pointer hover:text-red hover:border-red">
            <img src={cartImg} alt="cart" />
            <span>Add to Cart</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-[41px]">
          <span className="font-thin text-rose500 text-sm">Waffle</span>
          <span className="font-semibold text-rose900 text-md">
            Waffle with Berries
          </span>
          <span className="text-red text-md font-semibold">$6.50</span>
        </div>
      </div>

       <div className="w-[327px] h-[319px] font-redHat">
      <div className="flex flex-col justify-center items-center ">
        <img src={waffleImg} alt="waffle" className="h-[212px] rounded-md" />
        <div className="flex justify-between items-center bg-red text-[#fff] border border-rose400 p-3 w-[160px] rounded-3xl -m-[25px]">
          <button type="button" className="flex items-center justify-center w-5 h-5 border-2 rounded-full cursor-pointer" >
            <img src={decrementIcon} alt="decrement icon"/>
          </button>
          <span>4</span>
            <button type="button" className="flex items-center justify-center w-5 h-5 border-2 rounded-full cursor-pointer" >
            <img src={incrementIcon} alt="increment icon"/>
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
    </div>
    </>
  );
};
