function MenuNavbar() {
  return (
    <div className="hidden md:flex">
      <button className="bg-white inline-block px-4 text-black font-semibold">
        FEMME
      </button>
      <button className=" inline-block  px-4 text-customB hover:text-black font-semibold">
        CURVY
      </button>
      <button className=" inline-block  px-4 text-customB hover:text-black font-semibold">
        ENFANTS
      </button>
      <button className=" inline-block  px-4 text-customB hover:text-black font-semibold">
        HOMME
      </button>
      <button className=" inline-block  px-4 text-customB hover:text-black font-semibold">
        BEAUTÉ
      </button>
      <button className=" inline-block  px-4 text-customB hover:text-black font-semibold">
        MAISON
      </button>
    </div>
  );
}

export default MenuNavbar;
