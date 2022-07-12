import React from "react";
import CharacterInfo from "./CharacterInfo";

interface Props {
  date: string;
  charactersInfo: any[];
}

const DateGroups = (props: Props) => {
  const characterInfoJSX = props.charactersInfo?.map((el, idx) => (
    <CharacterInfo
      gender={el.gender}
      type={el.type}
      location={el.location.name}
      species={el.species}
      status={el.status}
      image={el.image}
      name={el.name}
      key={idx}
    />
  ));
  return (
    <>
      <p className="text-2xl">{props.date}:00</p>
      {characterInfoJSX}
    </>
  );
};

export default DateGroups;
