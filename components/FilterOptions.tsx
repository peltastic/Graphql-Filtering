import { useState } from "react";
type Props = {
  list: string[];
  show: string;
  filterType: string;
  dropHandler: (value: string) => void;
  clicked: (filterType: string, value: string) => void;
};

const FilterOptions = (props: Props) => {
  const [active, setActive] = useState<string>("All");
  const listHandler = (filterType: string, value: string) => {
    props.clicked(filterType, value);
    setActive(value);
    props.dropHandler("");
  };
  const listJSX = props.list?.map((el, index) => (
    <li
      onClick={() => listHandler(props?.filterType.toLowerCase(), el)}
      className={`${props.show === props.filterType ? "block" : "hidden"}
      mb-2 text-lg border-b cursor-pointer py-1`}
      key={index}
    >
      <p className={`${el === active ? "text-red-400" : ""}`}>{el}</p>
    </li>
  ));
  return (
    <div
      className={`${
        props.show === props.filterType ? "h-auto py-4" : "h-0 py-0"
      } w-full transition-all relative shadow-md px-4 max-h-[400px] bg-white mt-2`}
    >
      <ul className="">{listJSX}</ul>
    </div>
  );
};

export default FilterOptions;
