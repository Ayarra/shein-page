import MenuNavbar from "./MenuNavbar";
import UtilNavbar from "./UtilNavbar";

function Navbar() {
  return (
    <div className="bg-customA flex justify-between">
      <MenuNavbar></MenuNavbar>
      <button className="font-bold text-5xl">S H E I N</button>
      <UtilNavbar></UtilNavbar>
    </div>
  );
}

export default Navbar;
