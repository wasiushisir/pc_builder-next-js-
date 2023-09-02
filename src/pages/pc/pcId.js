// const pcDetails = ({ pc }) => {
//   console.log(pc, "inside details");
//   return <div></div>;
// };

// export default pcDetails;

// export const getStaticPaths = () => {
//   return fetch("http://localhost:3000/api/pc_builder")
//     .then((res) => res.json())
//     .then((datas) => {
//       return datas;
//     })
//     .then((datas) => {
//       const paths = datas?.data.map((pcId) => ({
//         params: { pcId: pcId._id },
//       }));

//       return paths;
//     })
//     .then((paths) => {
//       return { paths, fallback: false };
//     });
// };

// export async function getStaticProps({ params }) {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const res = await fetch(
//     `http://localhost:3000/api/pc_builder/${params.pcId}`
//   );
//   const pc = await res.json();

//   // Pass post data to the page via props
//   return { props: { pc } };
// }
