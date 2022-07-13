import type { NextPage } from "next";
import Search from "../components/Search";
import Filter from "../components/Filter";
import { filterValues } from "../data/filterValues";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_CHARACTERS } from "../graphql/queries";
import { groupData } from "../utils/groupData";
import DateGroups from "../components/DateGroups";
import CharacterInfoLoader from "../components/Loaders/CharacterInfoLoader";

interface FilterOptions {
  status: string;
  gender: string;
  species: string;
  type: string;
}

const Home: NextPage = () => {
  //all state management
  const [charactersList, setCharactersList] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [dropElement, setDropElement] = useState<string>("");
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    status: "",
    gender: "",
    species: "",
    type: "",
  });

  //using graphql query
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      page: 2,
      filter: {
        name: searchValue,
        status: filterOptions.status,
        gender: filterOptions.gender,
        species: filterOptions.species,
        type: filterOptions.type,
      },
    },
  });

  //all useEffects
  useEffect(() => {
    if (data) {
      const listData = data.characters.results;
      const list = groupData(listData);
      setCharactersList(list);
    }
  }, [data]);

  //all functions declarations
  const searchHandler = (e: any) => {
    setSearchValue(e.target.value);
  };
  const filterHandler = (filterType: string, value: string) => {
    const input = value === "All" ? "" : value;
    setFilterOptions({ ...filterOptions, [filterType]: input });
  };

  const dropElementHandler = (value: string) => {
    setDropElement(value);
  };

  const filterJSX = filterValues.map((el, index) => (
    <Filter
      key={index}
      filterAction={(filterType: string, value: string) =>
        filterHandler(filterType, value)
      }
      filterList={el.options}
      drop={dropElement}
      value={el.value}
      clicked={(value: string) => dropElementHandler(value)}
    />
  ));
  return (
    <section className="relative w-full border px-[2rem] mx-auto max-w-[800px]">
      <div className="w-full absolute z-[10000] left-0 top-0 py-6">
        <Search changed={searchHandler} />
        <div className="flex relative z-50 w-full mb-12 transition-all justify-around py-8">
          {filterJSX}
        </div>
      </div>
      <div className="mt-72 ">
        {!loading ? (
          <>
            {charactersList.length > 0 ? (
              charactersList.map((el, index) => (
                <DateGroups
                  key={index}
                  date={el.date}
                  charactersInfo={el.character}
                />
              ))
            ) : (
              <p className="text-center text-3xl">
                No Results
                {searchValue
                  ? " for" + " " + `"${searchValue}"` || "Your Search"
                  : null}
              </p>
            )}
          </>
        ) : (
          <>
            <CharacterInfoLoader />
            <CharacterInfoLoader />
            <CharacterInfoLoader />
            <CharacterInfoLoader />
            <CharacterInfoLoader />
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
