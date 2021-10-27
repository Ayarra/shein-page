import Connection from "../Dropdown/Connection";
import Panier from "../Dropdown/Panier";
import Support from "../Dropdown/Support";
import Global from "../Dropdown/Global";

function UtilNavbar() {
  return (
    <div className=" pr-10 hidden md:flex">
      <div className=" group hover:bg-white py-5 mx-1">
        <button className="p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block text-customB font-extralight "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </button>
        <Connection></Connection>
      </div>
      <div className=" group hover:bg-white py-5 mx-1">
        <button className="p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block text-customB font-extralight"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span className="text-customB p-1">0</span>
        </button>
        <Panier></Panier>
      </div>
      <div className=" group hover:bg-white py-5 mx-1">
        <button className="p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block text-customB font-extralight"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span className="p-1 text-customB">0</span>
        </button>
      </div>
      <div className=" group hover:bg-white py-5 mx-1">
        <button className="p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block text-customB font-extralight"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <Support></Support>
        </button>
      </div>
      <div className=" group hover:bg-white py-5 mx-1">
        <button className="p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block text-customB font-extralight"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
        </button>
        <Global></Global>
      </div>
    </div>
  );
}

export default UtilNavbar;
