import RootLayout from "@/components/Layouts/RootLayout";
import Category from "@/components/UI/Category";

const ssrCategory = ({ data }) => {
  return (
    <div>
      <Category catagories={data} />
    </div>
  );
};

export default ssrCategory;

ssrCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { category } = params;
  if (category !== undefined && category !== null) {
    try {
      const res = await fetch(
        `http://127.0.0.1:3000/api/pc_builder?category=${category}`
      );
      const data = await res.json();

      return {
        props: data,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        props: {},
      };
    }
  } else {
    console.error("Category not found in query parameters");
  }
};
