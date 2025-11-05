import { Card } from "./Card";


export const CardList = ({ datas }) => {
  return (
    <>
      <ul className="grid grid-rows-1 gap-6 place-items-center mx-auto md:grid-cols-3 md:grid-rows-3 h-full md:w-[688px] md:gap-x-6 md:gap-y-8 lg:w-[800px]">
        {datas.map((data) => (
          <li key={data.name}>
            <Card data={data} />
          </li>
        ))}
      </ul>
    </>
  );
};
