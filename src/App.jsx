import { useEffect, useState } from "react";
import { dataFromServer } from "./data";

import { Card } from "./components/Card";

export const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataFromServer);
  }, []);

  return (
    <>
      <Card />
    </>
  );
};
