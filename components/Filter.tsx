import { useState } from "react";
import FilterOptions from "./FilterOptions";
import { IoIosArrowDown } from "react-icons/io";

interface Props {
  value: string;
  filterList: string[];
  drop: string;
  filterAction: (filterType: string, value: string) => void;
  clicked: (value: string) => void;
}

const Filter = (props: Props) => {
  const dropHander = (value: string) => {
    const update = props?.drop === value ? "" : value;
    props.clicked(update);
  };
  return (
    <div className=" flex flex-col w-[20%]">
      <button
        onClick={() => dropHander(props.value)}
        className="text-xl shadow-md rounded-full sm:px-4 md:px-10 py-4 flex justify-center items-center"
      >
        {props.value}
        <IoIosArrowDown className="ml-2" />
      </button>
      <FilterOptions
        clicked={(filterType: string, value: string) =>
          props.filterAction(filterType, value)
        }
        dropHandler={(value: string) => props.clicked(value)}
        list={props?.filterList}
        show={props.drop}
        filterType={props?.value}
      />
    </div>
  );
};

export default Filter;
