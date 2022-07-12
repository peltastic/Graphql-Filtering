function CharacterInfoLoader() {
  return (
    <div className="w-full border-b py-10 flex items-start mb-8">
      <div className="h-[5rem] mr-10 w-[5rem] animate-pulse rounded-full bg-[#aaaaaa]"></div>
      <div className="w-[70%] flex flex-col">
        <div className="w-[40%] h-[10px] animate-pulse mb-[2rem] bg-[#aaaaaa]"></div>
        <div className="w-[70%] h-[10px] animate-pulse mb-[.7rem] bg-[#aaaaaa]"></div>
        <div className="w-[70%] h-[10px] animate-pulse bg-[#aaaaaa]"></div>
      </div>
    </div>
  );
}

export default CharacterInfoLoader;
