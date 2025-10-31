import { Card } from "./Card";

export const CardList = ({ datas }) => {
  return (
    <>
      <ul className="flex flex-col gap-6">
        {datas.map((data) => (
          <li key={data.name}>
            <Card data={data} />
          </li>
        ))}
      </ul>
    </>
  );
};
