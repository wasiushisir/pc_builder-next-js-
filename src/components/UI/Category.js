import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Category = ({ catagories }) => {
  //   console.log(catagories, "inside ssrcategory");
  const [take, setTake] = useState([]);
  const router = useRouter();

  const handleAddtoBuild = async (pc) => {
    const res = await fetch("http://localhost:3000/api/pc_builder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pc),
    });
    const data = await res.json();

    if (data) {
      router.push("/pc_builder");
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-[100px]">
        {catagories?.map((pc) => (
          <div className="rounded-2xl h-max w-full md:w-[400px]  flex flex-col items-center cursor-pointer overflow-hidden shadow-md border border-gray-100   gap-2 pb-3">
            <img className="h-[250px] w-full" src={pc?.Image} alt="" />
            <p className="text-md font-medium">Category: {pc?.Category}</p>
            <p className="text-md font-medium">Price: {pc?.Price}</p>
            <p className="text-md font-medium">Status: {pc?.Status}</p>

            <button
              onClick={() => handleAddtoBuild(pc)}
              className="btn btn-warning md:btn-sm  btn-xs"
            >
              Add To Builder
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
    </div>
  );
};

export default Category;
