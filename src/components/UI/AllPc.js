import Link from "next/link";

const AllPc = ({ allPc }) => {
  const handleClick = (pcId) => {
    router.push({
      pathname: "/pcDetails/[pcId]",
      query: { pcId: pcId },
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-[100px] mt-[40px]">
        {allPc?.map((pc) => (
          <div className="rounded-2xl h-max w-full md:w-[400px]  flex flex-col items-center cursor-pointer overflow-hidden shadow-md border border-gray-100   gap-2 pb-3">
            <img className="h-[250px] w-full" src={pc?.Image} alt="" />
            <p className="text-md font-medium">Category: {pc?.Category}</p>
            <p className="text-md font-medium">Price: {pc?.Price}</p>
            <p className="text-md font-medium">Status: {pc?.Status}</p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>

            <button
              onClick={() => handleClick(category)}
              className="btn btn-success md:btn-sm  btn-xs"
            >
              Details
            </button>

            {/* {data
              .filter((w) => w.Category === pc.Category)
              .map((a) => (
                <p>{a.Category}</p>
              ))} */}

            {/* <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => handleDelete(note._id)}
            className="btn btn-warning  md:btn-sm  btn-xs"
          >
            Delete
          </button>
          <Link to={`/home/editNote/${note._id}`}>
            <button className="btn btn-success md:btn-sm  btn-xs">
              Update
            </button>
          </Link>
        </div> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default AllPc;
