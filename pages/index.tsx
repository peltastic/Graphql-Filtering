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
  const [charactersList, setCharactersList] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    status: "",
    gender: "",
    species: "",
    type: "",
  });

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
  useEffect(() => {
    if (data) {
      const listData = data.characters.results;
      const list = groupData(listData);
      console.log(list);
      setCharactersList(list);
    }
  }, [data]);

  const searchHandler = (e: any) => {
    setSearchValue(e.target.value);
  };
  const filterHandler = (filterType: string, value: string) => {
    setFilterOptions({ ...filterOptions, [filterType]: value });
  };

  const filterJSX = filterValues.map((el, index) => (
    <Filter
      key={index}
      clicked={(filterType: string, value: string) =>
        filterHandler(filterType, value)
      }
      filterList={el.options}
      value={el.value}
    />
  ));
  return (
    <section className="relative w-full px-[2rem] border mx-auto max-w-[800px]">
      <nav className="w-full  top-0 py-6">
        <Search changed={searchHandler} />
        <div className="flex w-full mb-12 transition-all justify-around py-8">
          {filterJSX}
        </div>
      </nav>
      <div className="">
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
                No Results for {`"${searchValue}"` || "Your Search"}
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
