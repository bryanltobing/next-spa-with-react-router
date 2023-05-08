import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { RotateLoader } from "react-spinners";

export default function App({ Component, pageProps }: AppProps) {
  const [mountedState, setMountedState] = useState(false);

  useEffect(() => {
    setMountedState(true);
  }, []);

  return (
    <>
      {mountedState ? (
        <Component {...pageProps} />
      ) : (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <RotateLoader color="white" />
        </div>
      )}
    </>
  );
}
