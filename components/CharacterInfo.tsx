interface Props {
  gender: string;
  type: string;
  status: string;
  location: string;
  species: string;
  image: string;
  name: string;
}

const CharacterInfo = (props: Props) => {
  return (
    <div className=" w-full flex items-start mb-4 border-b py-10">
      <div className="h-[5rem] w-[5rem] overflow-hidden rounded-full mr-[2rem] border-[.2rem] border-red-400">
        <img src={props.image} alt="" />
      </div>
      <div className=" w-[80%] text-xl">
        <h1 className="text-2xl mb-3">{props.name}</h1>
        <div className="flex">
          <p className="mr-4">
            <span className="font-bold text-[#787878] mr-2">Gender:</span>
            {props.gender}
          </p>
          <p className="mr-4">
            <span className="font-bold text-[#787878] mr-2">Type:</span>
            {props.type || "Not Specified"}
          </p>
          <p className="mr-4">
            <span className="font-bold text-[#787878] mr-2">Species:</span>
            {props.species}
          </p>
        </div>
        <div className="flex">
          <p className="mr-4">
            <span className="font-bold text-[#787878] mr-2">Status:</span>
            {props.status}
          </p>
          <p className="mr-4">
            <span className="font-bold text-[#787878] mr-2">Location:</span>
            {props.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
