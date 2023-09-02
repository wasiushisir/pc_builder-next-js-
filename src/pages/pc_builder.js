import RootLayout from "@/components/Layouts/RootLayout";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { useState } from "react";

const Pc_Builder = ({ allPc }) => {
  const router = useRouter();
  const [a, b] = useState([]);
  console.log(allPc, "inside form ssr");
  const propertyToMakeUnique = "Category";

  // Use a Set to store unique values
  const uniqueValuesSet = new Set();

  // Iterate through the array and add the chosen property's value to the Set
  allPc?.pcs.forEach((obj) => {
    uniqueValuesSet.add(obj[propertyToMakeUnique]);
  });

  const uniqueValuesArray = Array.from(uniqueValuesSet);
  console.log(uniqueValuesArray, "inside ssr unique category");

  const handleClick = (category) => {
    router.push({
      pathname: "/ssr_category/[category]",
      query: { category: category },
    });
  };
  return (
    // <div className="flex flex-col justify-center space-x-1 ">
    //   {uniqueValuesArray.map((category) => (
    //     <>
    //       <div className="flex justify-evenly items-center ">
    //         <h1 className="font-bold text-[15px] w-[100px]">{category}</h1>
    //         <button className="btn btn-warning my-2 w-[150px]">Select</button>
    //       </div>
    //     </>
    //   ))}

    // </div>

    <div>
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
              <div className="flex flex-col justify-evenly items-center">
                {allPc?.builds
                  ?.filter((c) => c.Category === category)
                  .map((d) => (
                    <>
                      <div className="flex justify-between items-center ">
                        <img
                          className="w-[50px] h-[50px] m-4"
                          src={d.Image}
                          alt=""
                        />
                        <h1 className="w-[150px]">{d.Price} ৳</h1>
                        <h1 className="w-[150px]">{d.Category}</h1>
                        <h1 className="w-[150px]">{d.Status}</h1>
                      </div>
                    </>
                  ))}
              </div>
              {/* <div className="flex flex-col justify-evenly items-center">
                <div className="flex justify-between items-center space-x-4">
                  {allPc?.builds
                    ?.filter((c) => c.Category === category)
                    .map((d) => (
                      <>
                        <h1>{d.Price}</h1>
                        <h1>{d.Category}</h1>
                      </>
                    ))}
                </div>
              </div> */}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Pc_Builder;

Pc_Builder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = () => {
  return fetch("http://localhost:3000/api/pc_builder")
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .then((allPc) => {
      return {
        props: {
          allPc,
        },
      };
    });
};
