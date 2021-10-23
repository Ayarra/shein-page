function Global() {
  return (
    <div className="absolute mt-6 w-72  right-0 z-10 hidden bg-grey-200 group-hover:block">
      <div className="p-6 text-left bg-white  shadow-lg">
        <p className="font-semibold pb-3">Circulation</p>
        <select className="bg-customA w-full mt-1 mb-2 p-3 text-sm focus:outline-none">
          <option>MAD / DH</option>
          <option>USD/US$</option>
          <option>EUR/€</option>
          <option>SAR/SR</option>
        </select>
        <p className="font-semibold pb-3">Langue</p>
        <hr></hr>
        <div className="flex justify-start py-2 text-sm">
          <button className="pr-6">Français</button>
          <button>العربية</button>
        </div>
        <div className="text-center text-blue-400">
          <a href="void">International Site</a>
        </div>
      </div>
    </div>
  );
}

export default Global;
