import orderConfirmed from "../assets/images/icon-order-confirmed.svg";

// Preload all image URLs from the images folder (Vite)
const IMAGES = import.meta.glob("/src/assets/images/*.{jpg,png,svg}", {
  eager: true,
  query: "?url",
  import: 'default'
});

export const OrderConfirmed = ({ onClose, cartItems = [], totalPrice = 0 }) => {
  return (
    <div className="flex flex-col justify-center gap-6 w-[327px] md:w-[688px] lg:w-[592px] p-6 font-redHat bg-white rounded-md shadow-lg">
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
        {cartItems.slice(0, 3).map((item) => {
          // Determine filename from data paths and lookup preloaded URL
          const imgPath =
            item?.image?.thumbnail ||
            item?.image?.mobile ||
            item?.image?.desktop ||
            null;
          let imgSrc = null;
          if (imgPath) {
            const parts = imgPath.split("/");
            const filename = parts[parts.length - 1];
            const key = `/src/assets/images/${filename}`;
            imgSrc = IMAGES[key] || null;
          }

          return (
            <div key={item.name} className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                {imgSrc ? (
                  <img
                    src={imgSrc}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                ) : (
                  <div className="w-12 h-12 bg-rose100 rounded" />
                )}
                <div className="flex flex-col text-md">
                  <span className="text-rose900 font-medium">{item.name}</span>
                  <div className="flex gap-4">
                    <span className="text-red font-semibold">
                      {item.quantity}x
                    </span>
                    <span className="text-rose500 font-light">
                      @ ${item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-rose900 font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          );
        })}
        {cartItems.length > 3 && (
          <div className="text-rose500 text-sm">
            and {cartItems.length - 3} more items
          </div>
        )}
        <hr className="block h-[1px] border-0 bg-rose100" />
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center text-rose900">
            <span className="font-sm">Order Total</span>
            <span className="font-bold text-2xl">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <button
        className="bg-red p-3 rounded-3xl text-white cursor-pointer font-semibold"
        onClick={() => onClose && onClose()}
      >
        Start New Order
      </button>
    </div>
  );
};
