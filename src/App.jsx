import { useEffect, useState } from "react";
import { dataFromServer } from "./data";

import { CardList } from "./components/CardList";

export const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataFromServer);
  }, []);

  return (
    <>
      <CardList datas={data} />
    </>
  );
};
