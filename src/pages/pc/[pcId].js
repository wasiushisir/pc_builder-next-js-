import { Pc } from "@/components/Context";
import RootLayout from "@/components/Layouts/RootLayout";
import { useContext } from "react";

const Categories = ({ pc1 }) => {
  console.log(pc1, "inside of dynamic");
  // const { pc, setpc } = useContext(Pc);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-[100px]">
        {pc1?.data.map((pc) => (
          <div className="rounded-2xl h-max w-full md:w-[400px]  flex flex-col items-center cursor-pointer overflow-hidden shadow-md border border-gray-100   gap-2 pb-3">
            <img className="h-[250px] w-full" src={pc?.Image} alt="" />
            <p className="text-md font-medium">Category: {pc?.Category}</p>
            <p className="text-md font-medium">Price: {pc?.Price}</p>
            <p className="text-md font-medium">Status: {pc?.Status}</p>

            {/* <button
            onClick={() => handleAddtoBuild(pc)}
            className="btn btn-warning md:btn-sm  btn-xs"
          >
            Add To Builder
          </button> */}

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

export default Categories;

Categories.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://pc-builder-ajh6t4zn5-wasiushisir.vercel.app/pc"
  );
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts?.pcs.map((pcId) => ({
    params: { pcId: pcId.Category },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://pc-builder-ajh6t4zn5-wasiushisir.vercel.app/selectCategory?category=${params.pcId}`
  );
  const pc1 = await res.json();

  // Pass post data to the page via props
  return { props: { pc1 } };
}
