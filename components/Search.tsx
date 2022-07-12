interface Props {
  changed: (e: any) => void;
}

const Search = (props: Props) => {
  return (
    <input
      onChange={props.changed}
      className=" w-[100%] text-2xl outline-none transition-all focus:border-[#3c3c3c] mx-auto block rounded-full border border-[#b0b0b0] px-6 py-3"
      type="search"
      placeholder="Search..."
    />
  );
};

export default Search;
