import { useEffect, useState } from "react";
import { dataFromServer } from "./data";

import { CardList } from "./components/CardList";
import { Cart } from "./components/Cart";
import { OrderConfirmed } from "./components/OrderConfirmed";


export const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataFromServer);
  }, []);

  return (
    <>
      <CardList datas={data} />
      <Cart />
      <OrderConfirmed />
    </>
  );
};
