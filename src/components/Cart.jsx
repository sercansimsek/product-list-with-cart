import removeItemIcon from "../assets/images/icon-remove-item.svg";
import carbonNeutral from "../assets/images/icon-carbon-neutral.svg";
import emptyIllustration from "../assets/images/illustration-empty-cart.svg";

export const Cart = ({ cartItems, onRemoveItem, onConfirm }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Empty cart state
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center gap-6 w-[327px] md:w-[688px] lg:w-[384px] p-6 font-redHat bg-white rounded-2xl">
        <span className="font-semibold text-2xl text-red">Your Cart (0)</span>
        <img src={emptyIllustration} alt="empty cart" className="w-48 h-48" />
        <span className="text-rose500 text-center">
          Your added items will appear here
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center gap-6 w-[327px] md:w-[688px] lg:w-[384px] p-6 font-redHat">
      <span className="font-semibold text-2xl text-red">
        Your Cart ({totalItems})
      </span>
      {cartItems.map((item) => (
        <div key={item.name} className="flex justify-between items-center">
          <div className="flex flex-col gap-2 text-md">
            <span className="text-rose900 font-medium">{item.name}</span>
            <div className="flex gap-3">
              <span className="text-red font-semibold">{item.quantity}x</span>{" "}
              <span className="text-rose500 font-light">
                @ ${item.price.toFixed(2)}
              </span>{" "}
              <span className="text-rose500 font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          </div>
          <button
            className="w-5 h-5 cursor-pointer"
            onClick={() => onRemoveItem(item.name)}
          >
            <img
              src={removeItemIcon}
              alt="remove item icon"
              className="border border-rose300 rounded-full p-1 hover:border-black"
            />
          </button>
        </div>
      ))}
      {cartItems.length > 0 && (
        <hr className="block h-[1px] border-0 bg-rose100" />
      )}
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center text-rose900">
          <span className="font-sm">Order Total</span>
          <span className="font-bold text-2xl">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex gap-2 bg-rose-50 p-3 rounded-md">
          <img src={carbonNeutral} alt="carbon neutral icon" />
          <span className="text-rose900 text-sm">
            This is a <strong className="font-semibold">carbon-neutral</strong>{" "}
            delivery
          </span>
        </div>

        <button
          className="bg-red p-3 rounded-3xl text-white cursor-pointer font-semibold"
          onClick={() => onConfirm && onConfirm()}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};
