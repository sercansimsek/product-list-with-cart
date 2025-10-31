import waffleImg from "../assets/images/image-waffle-mobile.jpg";
import cartImg from "../assets/images/icon-add-to-cart.svg";

export const Card = () => {
  return (
    <div className="w-[327px] h-[319px]">
      <div className="flex flex-col justify-center items-center ">
        <img src={waffleImg} alt="waffle" className="h-[212px] rounded-md" />
        <div className="flex gap-3 bg-[#fff] text-black border border-rose400 p-3 w-[160px] rounded-3xl -m-[25px]">
          <img src={cartImg} alt="cart" />
          <span>Add to Cart</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-[41px]">
        <span>Waffle</span>
        <span>Waffle with Berries</span>
        <span>$6.50</span>
      </div>
    </div>
  );
};
