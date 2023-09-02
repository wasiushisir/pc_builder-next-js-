import "@/styles/globals.css";
import MyContextProvider from "@/components/Context";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import React from "react";

export default function App({ Component, pageProps }) {
  // React.StrictMode = true;
  const getLayout = Component.getLayout || ((page) => page);
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <SessionProvider>
      <MyContextProvider>
        {getLayout(<Component {...pageProps} />)}
      </MyContextProvider>
    </SessionProvider>
  );
}
