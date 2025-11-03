import { Card } from "./Card";

export const CardList = ({ datas }) => {
  return (
    <>
      <ul className="grid grid-rows-1 gap-6 place-items-center mx-auto md:grid-cols-3 md:grid-rows-3 md:w-[688px]">
        {datas.map((data) => (
          <li key={data.name}>
            <Card data={data} />
          </li>
        ))}
      </ul>
    </>
  );
};
