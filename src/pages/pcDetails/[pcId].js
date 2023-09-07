import RootLayout from "@/components/Layouts/RootLayout";

const pcDetails = ({ pc }) => {
  console.log(pc, "inside details");
  return (
    <div>
      <div className="grid grid-cols-1   px-[100px]">
        {pc?.pcs?.map((pc) => (
          <div className="rounded-2xl h-max w-full   flex flex-col items-center cursor-pointer overflow-hidden shadow-md border border-gray-100   gap-2 pb-3">
            <img className="h-[250px] w-full" src={pc?.Image} alt="" />
            <p className="text-md font-medium">
              Product Name: {pc?.ProductName}
            </p>
            <p className="text-md font-medium">Category: {pc?.Category}</p>
            <p className="text-md font-medium">Price: {pc?.Price}</p>
            <p className="text-md font-medium">Status: {pc?.Status}</p>
            <p className="text-md font-medium">
              Description: {pc?.Description}
            </p>
            <p className="text-md font-medium">
              Key Features: {pc?.KeyFeatures}
            </p>
            <p className="text-md font-medium">Reviews: {pc?.Reviews}</p>
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
                checked
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
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default pcDetails;

pcDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = () => {
  return fetch("https://pc-builder-server-jnez.vercel.app/pc")
    .then((res) => res.json())
    .then((datas) => {
      return datas;
    })
    .then((datas) => {
      const paths = datas?.pcs.map((pcId) => ({
        params: { pcId: pcId._id },
      }));

      return paths;
    })
    .then((paths) => {
      return { paths, fallback: false };
    });
};

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://pc-builder-server-jnez.vercel.app/pc/${params.pcId}`
  );
  const pc = await res.json();

  // Pass post data to the page via props
  return { props: { pc } };
}
