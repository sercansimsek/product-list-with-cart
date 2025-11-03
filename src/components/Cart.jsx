import removeItemIcon from "../assets/images/icon-remove-item.svg";

export const Cart = () => {
  return (
    <div className="flex flex-col justify-center gap-6 w-[327px] p-6">
      <h1>Your Cart (7)</h1>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span>Classic Tiramisu</span>
          <span>1x @ $5.50 $5.50</span>
        </div>
        <button className="w-5 h-5 cursor-pointer">
          <img
            src={removeItemIcon}
            alt="remove item icon"
            className="border border-rose300 rounded-full p-1 hover:border-black"
          />
        </button>
      </div>
      <hr className="block h-[1px] border-0 bg-rose100"/>
    </div>
  );
};
