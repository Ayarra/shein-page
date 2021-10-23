import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import SubNavbar from "./Navbar/SubNavbar";
import Product from "./Product/Product";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <SubNavbar></SubNavbar>
      <Product></Product>
      <Footer></Footer>
    </div>
  );
}

export default App;
