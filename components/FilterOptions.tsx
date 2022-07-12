import { useState } from "react";
type Props = {
  list: string[];
  show: boolean;
  filterType: string;
  clicked: (filterType: string, value: string) => void;
};

const FilterOptions = (props: Props) => {
  const [active, setActive] = useState<string>("All");
  const listHandler = (filterType: string, value: string) => {
    props.clicked(filterType, value);
  };
  const listJSX = props.list?.map((el, index) => (
    <li
      onClick={() => listHandler(props?.filterType.toLowerCase(), el)}
      className={`${
        props.show ? "block" : "hidden"
      } mb-2 text-lg border-b cursor-pointer py-1`}
      key={index}
    >
      {el}
    </li>
  ));
  return (
    <div
      className={`${
        props.show ? "h-auto py-4" : "h-0 py-0"
      } w-[18rem] transition-all relative shadow-md px-4 max-h-[400px]`}
    >
      <ul className="">{listJSX}</ul>
    </div>
  );
};

export default FilterOptions;
