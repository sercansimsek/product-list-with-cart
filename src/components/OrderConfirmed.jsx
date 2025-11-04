import orderConfirmed from "../assets/images/icon-order-confirmed.svg";
import tiramisuImg from "../assets/images/image-tiramisu-mobile.jpg";

export const OrderConfirmed = () => {
  return (
    <div className="flex flex-col justify-center gap-6 w-[327px] md:w-[688px] lg:w-[592px] p-6 font-redHat">
      <div className="flex flex-col gap-2">
        <img
          src={orderConfirmed}
          alt="order confirmed icon"
          className="w-12 h-12 mb-4"
        />
        <span className="text-rose900 font-bold text-4xl">
          Order <br /> Confirmed
        </span>
        <span className="text-rose500 font-light">
          We hope you enjoy your food!
        </span>
      </div>

      <div className="flex flex-col bg-rose50 rounded-md gap-4 p-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <img src={tiramisuImg} alt="tiramisu image" className="w-12 h-12" />
            <div className="flex flex-col text-md">
              <span className="text-rose900 font-medium">Classic Tiramisu</span>
              <div className="flex gap-4">
                <span className="text-red font-semibold">1x</span>
                <span className="text-rose500 font-light">@ $5.50</span>
              </div>
            </div>
          </div>
          <span className="text-rose900 font-medium">$5.50</span>
        </div>
        <hr className="block h-[1px] border-0 bg-rose100" />
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center text-rose900">
            <span className="font-sm">Order Total</span>
            <span className="font-bold text-2xl">$46.50</span>
          </div>
        </div>
      </div>

      <button className="bg-red p-3 rounded-3xl text-white cursor-pointer font-semibold">
        Start New Order
      </button>
    </div>
  );
};
