import React, { useContext, useEffect, useState } from "react";
import { Pc } from "../Context";
import { useRouter } from "next/router";

const FeaturedCategory = () => {
  const { pc, setpc } = useContext(Pc);
  const router = useRouter();
  const [text, setText] = useState("");
  const propertyToMakeUnique = "Category";

  // Use a Set to store unique values
  const uniqueValuesSet = new Set();

  // Iterate through the array and add the chosen property's value to the Set
  pc.forEach((obj) => {
    uniqueValuesSet.add(obj[propertyToMakeUnique]);
  });

  const uniqueValuesArray = Array.from(uniqueValuesSet);

  const handleClick = (pcId) => {
    router.push({
      pathname: "/pcDetails/[pcId]",
      query: { pcId: pcId },
    });
  };

  return (
    <div className="mt-[150px]">
      <h1 className="font-bold text-[20px] text-center">Featured Category </h1>
      <div className="px-[25%]">
        {uniqueValuesArray.map((category) => (
          <>
            <div className="flex flex-col justify-center space-x-1  border-b-2 border-warning">
              <div className="flex justify-between items-center      ">
                <h1 className="font-bold text-[15px] my-3 w-[100px]">
                  {category}
                </h1>
                <button
                  onClick={() => handleClick(category)}
                  className="btn btn-sm btn-warning  w-[150px] my-3"
                >
                  Select
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategory;
