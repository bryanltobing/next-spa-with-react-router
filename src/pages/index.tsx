import { Inter } from "next/font/google";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return <Link to="/about">Go to about</Link>;
};

const PostDetails = () => {
  const { id } = useParams<{ id: string }>();

  return <div>Post details with id of {id}</div>;
};

export default function Root() {
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: (
            <div>
              <a href="deeplinking://homescreen">Go to home screen</a>
              <a href="deeplinking://savingscreen">Go to savings screen</a>
            </div>
          ),
        },
        {
          path: "/posts/:id",
          element: <PostDetails />,
        },
      ]),
    []
  );

  return (
    <>
      <main className={inter.className}>
        <RouterProvider router={router} />
      </main>
    </>
  );
}
