import Link from "next/link";
import { useContext } from "react";
import { Pc } from "../Context";
import googleImg from "../../../src/images/gggoogle (1).png";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const RootLayout = ({ children }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const { pc, setpc } = useContext(Pc);
  const propertyToMakeUnique = "Category";

  // Use a Set to store unique values
  const uniqueValuesSet = new Set();

  // Iterate through the array and add the chosen property's value to the Set
  pc.forEach((obj) => {
    uniqueValuesSet.add(obj[propertyToMakeUnique]);
  });

  const uniqueValuesArray = Array.from(uniqueValuesSet);
  console.log(pc, "inside root");

  // const handleCategory = async (category) => {
  //   <Link href={`/category/${category}`}></Link>;

  // };

  const handleClick = (pcId) => {
    router.push({
      pathname: "/pc/[pcId]",
      query: { pcId: pcId },
    });
  };

  return (
    <>
      <div class="navbar  bg-base-300">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <h1>Item 1</h1>
              </li>
              <li>
                <h1>Parent</h1>
                <ul class="p-2">
                  <li>
                    <h1>Submenu 1</h1>
                  </li>
                  <li>
                    <h1>Submenu 2</h1>
                  </li>
                </ul>
              </li>
              <li>
                <h1>Item 3</h1>
              </li>
            </ul>
          </div>
          <Link
            href="/"
            class="btn btn-ghost normal-case text-xl hover:bg-warning"
          >
            Ahmed Tech
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <div class="dropdown dropdown-hover">
              <label tabindex="0" class="btn btn-ghost hover:bg-warning m-1">
                Category
              </label>
              <ul
                tabindex="0"
                class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
              >
                {uniqueValuesArray.map((p) => (
                  <>
                    <li
                      onClick={() => handleClick(p)}
                      className="hover:bg-warning cursor-pointer"
                    >
                      {p}
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </ul>
        </div>
        <div class="navbar-end">
          {session?.user ? (
            <>
              <p>{session?.user?.name}</p>
              <button
                onClick={() => signOut()}
                className="btn btn-success btn-sm mx-2"
              >
                Log Out
              </button>
            </>
          ) : (
            <img
              onClick={() =>
                signIn("google", {
                  callbackUrl: "http://localhost:3000/",
                })
              }
              className="h-[30px] w-[30px] cursor-pointer mx-5 rounded-full"
              src="https://banner2.cleanpng.com/20180521/ers/kisspng-google-logo-5b02bbe1d5c6e0.2384399715269058258756.jpg"
              alt=""
            />
          )}
          <Link href="/pc_builder" class="btn btn-warning">
            pc builder
          </Link>
        </div>
      </div>

      <div className="mb-[20px]">{children}</div>
    </>
  );
};

export default RootLayout;
