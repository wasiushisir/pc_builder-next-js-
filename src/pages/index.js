import Image from "next/image";
import { Inter } from "next/font/google";
import RootLayout from "@/components/Layouts/RootLayout";
import AllPc from "@/components/UI/AllPc";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { Pc } from "@/components/Context";
import Banner from "@/components/UI/Banner";
import Footer from "@/components/Layouts/Footer";
import FeaturedCategory from "@/components/UI/FeaturedCategory";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ allPcs }) {
  const { pc, setpc } = useContext(Pc);
  console.log(pc);

  console.log(allPcs.pcs);
  function shuffleArray(array) {
    const shuffledArray = [...array]; // Create a copy of the original array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray; // Return the shuffled array
  }

  // Shuffle the array and store the shuffled result
  const shuffledResult = shuffleArray(allPcs?.pcs);

  useEffect(() => {
    setpc(shuffledResult);
  }, []);

  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // console.log(shuffledResult);
  return (
    <>
      <Head>
        <title>PC_BUILDER</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />

      <AllPc allPc={shuffledResult} />
      <FeaturedCategory />

      <Footer />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = () => {
  return fetch("https://pc-builder-ajh6t4zn5-wasiushisir.vercel.app/pc")
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .then((data) => {
      return {
        props: {
          allPcs: data,
        },
        revalidate: 10,
      };
    });
};
