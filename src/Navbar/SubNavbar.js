const menu = [
  "NOUVEAUTÉS",
  "TENDANCES",
  "VÊTEMENTS",
  "ROBES",
  "CHAUSSURES & ACCS",
  "PROMOS",
  "E-CARTE CADEAU",
  "EXPLOREZ",
];

const menuRender = menu.map((item) => (
  <button
    key={item}
    className="p-4 text-sm font-medium     border-b-2 border-white hover:border-black"
  >
    {item}
  </button>
));

function SubNavbar() {
  return (
    <div className="flex justify-between px-9 shadow-md">
      <div>{menuRender}</div>

      <div className="bg-white flex items-center">
        <input
          className="w-full py-2    px-3     text-gray-700 leading-tight focus:outline-none border-customD border"
          id="Clothes"
          type="text"
          placeholder="Clothes"
        ></input>
        <div className="">
          <button className="bg-black text-white h-10 w-10 hover:bg-customD focus:outline-none  flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubNavbar;
