import { useEffect, useState } from "react";
import { dataFromServer } from "./data";

import { CardList } from "./components/CardList";
import { Cart } from "./components/Cart";
import { OrderConfirmed } from "./components/OrderConfirmed";
import { ProductCountContext } from "./components/ContextApi/ProductCountContext";

export const App = () => {
  const [data, setData] = useState([]);
  const [productCount, setProductCount] = useState(1);

  useEffect(() => {
    setData(dataFromServer);
  }, []);

  return (
    <>
      <div className="flex flex-col w-[327px] md:w-[688px] lg:-[800px] justify-center mx-auto gap-8">
        <h1 className="text-rose900 font-bold text-4xl">Desserts</h1>
        <ProductCountContext value={{ productCount, setProductCount }}>
          <CardList datas={data} />
          <Cart />
        </ProductCountContext>
      </div>

      <OrderConfirmed />
    </>
  );
};
