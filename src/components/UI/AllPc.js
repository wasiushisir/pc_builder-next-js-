import Link from "next/link";

const AllPc = ({ allPc }) => {
  const data = [
    { id: 1, serviceId: 1, title: "A", Category: "CPU" },
    { id: 2, serviceId: 3, title: "T", Category: "RAM" },
    { id: 3, serviceId: 45, title: "R" },
    { id: 4, serviceId: 55, title: "Q" },
    { id: 5, serviceId: 58, title: "S" },
    { id: 6, serviceId: 63, title: "zx" },
    { id: 7, serviceId: 66, title: "y" },
  ];
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
            <Link href={`/pcDetails/${pc._id}`}>
              <button className="btn btn-success md:btn-sm  btn-xs">
                Details
              </button>
            </Link>

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
