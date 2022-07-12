import { useState } from "react";
import FilterOptions from "./FilterOptions";
import { IoIosArrowDown } from "react-icons/io";

interface Props {
  value: string;
  filterList: string[];
  clicked: (filterType: string, value: string) => void;
}

const Filter = (props: Props) => {
  const [drop, setDrop] = useState<boolean>(false);
  
  return (
    <div>
      <button
        onClick={() => setDrop(!drop)}
        className="text-xl shadow-md rounded-full px-10 py-4 flex items-center"
      >
        {props.value}
        <IoIosArrowDown className="ml-2" />
      </button>
      <FilterOptions
        clicked={(filterType: string, value: string) =>
          props.clicked(filterType, value)
        }
        list={props?.filterList}
        show={drop}
        filterType={props?.value}
      />
    </div>
  );
};

export default Filter;
